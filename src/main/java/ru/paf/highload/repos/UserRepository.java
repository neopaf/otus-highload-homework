package ru.paf.highload.repos;

import lombok.Builder;
import lombok.Data;
import org.springframework.stereotype.Component;

import java.sql.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Component
public class UserRepository {

    private final Connection connection;

    @Data
    @Builder
    public static class Entity {

        private String id;
        private String firstName;
        private String secondName;
        private LocalDate birthdate;
        private String biography;
        private String city;
        private String password;
        private String password_salt;
        private String password_hash;
    }

    Random rnd = new Random();

    public UserRepository(ConfigProperties config) throws ClassNotFoundException, SQLException {
        Class.forName("com.mysql.cj.jdbc.Driver");
        connection = DriverManager.getConnection(config.getConnectionString());
    }

    private PreparedStatement getStatementSearch() throws SQLException {
        return connection.prepareStatement(
            "select " +
                "id, " +
                "first_name, " +
                "second_name, " +
                "birthdate, " +
                "biography, " +
                "city, " +
                "password_salt, " +
                "password_hash " +
                "from `user` " +
                "where first_name like ? and second_name like ?");
    }

    private PreparedStatement getStatementHash() throws SQLException {
        return connection.prepareStatement(
            "select MD5(?) as password_hash");
    }

    private PreparedStatement getStatementGet() throws SQLException {
        return connection.prepareStatement(
            "select " +
                "first_name, " +
                "second_name, " +
                "birthdate, " +
                "biography, " +
                "city, " +
                "password_salt, " +
                "password_hash " +
                "from `user` where id = ?");
    }

    private PreparedStatement getStatementAdd() throws SQLException {
        return connection.prepareStatement(
            "insert into `user` (" +
                "id," +
                "first_name," +
                "second_name," +
                "birthdate," +
                "biography," +
                "city," +
                "password_salt," +
                "password_hash) " +
                "values (?, ?, ?, ?, ?, ?, ?, MD5(?))");
    }

    public void add(Entity entity) throws Throwable {
        PreparedStatement statementAdd = getStatementAdd();
        String salt = String.format("%06x", rnd.nextInt(0x1000000));
        statementAdd.setString(1, entity.id);
        statementAdd.setString(2, entity.firstName);
        statementAdd.setString(3, entity.secondName);
        statementAdd.setDate(4, Date.valueOf(entity.birthdate));
        statementAdd.setString(5, entity.biography);
        statementAdd.setString(6, entity.city);
        statementAdd.setString(7, salt);
        statementAdd.setString(8, salt + entity.password);
        statementAdd.execute();
    }

    public Entity get(String id) throws Throwable {
        PreparedStatement statementGet = getStatementGet();
        statementGet.setString(1, id);

        ResultSet resultSet = statementGet.executeQuery();
        if (resultSet.next())
            return buildEntity(id, resultSet);

        return null;
    }

    private static Entity buildEntity(String id, ResultSet resultSet) throws SQLException {
        return Entity.builder()
            .id(id)
            .firstName(resultSet.getString("first_name"))
            .secondName(resultSet.getString("second_name"))
            .birthdate(resultSet.getDate("birthdate").toLocalDate())
            .biography(resultSet.getString("biography"))
            .city(resultSet.getString("city"))
            .password_salt(resultSet.getString("password_salt"))
            .password_hash(resultSet.getString("password_hash"))
            .build();
    }

    public String hash(String salt, String password) throws Throwable {
        PreparedStatement statementHash = getStatementHash();
        statementHash.setString(1, salt + password);

        ResultSet resultSet = statementHash.executeQuery();
        if (resultSet.next())
            return resultSet.getString("password_hash");

        return null;
    }

    public List<Entity> search(String firstName, String lastName) throws Throwable {
        PreparedStatement statementSearch = getStatementSearch();
        statementSearch.setString(1, firstName+'%');
        statementSearch.setString(2, lastName+'%');
        ResultSet resultSet = statementSearch.executeQuery();

        List<Entity> result = new ArrayList<>();
        while (resultSet.next())
            result.add(buildEntity(resultSet.getString("id"), resultSet));

        return result.isEmpty()? null: result;
    }

}