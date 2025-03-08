package ru.paf.highload.repos;

import lombok.Builder;
import lombok.Data;
import org.springframework.stereotype.Component;

import java.sql.*;
import java.time.LocalDate;
import java.util.Random;

@Component
public class UserRepository {

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

    private final PreparedStatement statementAdd;
    private final PreparedStatement statementGet;
    private final PreparedStatement statementHash;

    public UserRepository(ConfigProperties config) throws ClassNotFoundException, SQLException {
        Class.forName("com.mysql.cj.jdbc.Driver");
        Connection connection = DriverManager.getConnection(config.getConnectionString());
        statementAdd = connection.prepareStatement(
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

        statementGet = connection.prepareStatement(
            "select " +
                "first_name, " +
                "second_name, " +
                "birthdate, " +
                "biography, " +
                "city, " +
                "password_salt, " +
                "password_hash " +
                "from `user` where id = ?");

        statementHash = connection.prepareStatement(
            "select MD5(?) as password_hash");

    }

    public void add(Entity entity) throws SQLException {
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

    public Entity get(String id) throws SQLException {
        statementGet.setString(1, id);

        ResultSet resultSet = statementGet.executeQuery();
        if (resultSet.next())
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

        return null;
    }

    public String hash(String salt, String password) throws SQLException {
        statementHash.setString(1, salt + password);

        ResultSet resultSet = statementHash.executeQuery();
        if (resultSet.next())
            return resultSet.getString("password_hash");

        return null;
    }

}