package ru.paf.highload.repos;

import lombok.Builder;
import lombok.Data;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;
import java.sql.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Component
public class UserRepository {

    private final DataSource dataSource;

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

    public UserRepository(DataSource dataSource) throws ClassNotFoundException, SQLException {
        this.dataSource = dataSource;
    }

    private PreparedStatement getStatementSearch(Connection connection) throws SQLException {
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

    private PreparedStatement getStatementHash(Connection connection) throws SQLException {
        return connection.prepareStatement(
            "select MD5(?) as password_hash");
    }

    private PreparedStatement getStatementGet(Connection connection) throws SQLException {
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

    private PreparedStatement getStatementAdd(Connection connection) throws SQLException {
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
        try(Connection connection = dataSource.getConnection()) {
            try(PreparedStatement statementAdd = getStatementAdd(connection)) {
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
        }
    }

    public Entity get(String id) throws Throwable {
        try(Connection connection = dataSource.getConnection()) {
            try(PreparedStatement statementGet = getStatementGet(connection)) {
                statementGet.setString(1, id);
                try(ResultSet resultSet = statementGet.executeQuery()) {
                    if (resultSet.next())
                        return buildEntity(id, resultSet);
                }
            }
        }

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
        try(Connection connection = dataSource.getConnection()) {
            try(PreparedStatement statementHash = getStatementHash(connection)) {
                statementHash.setString(1, salt + password);

                try(ResultSet resultSet = statementHash.executeQuery()) {
                    if (resultSet.next())
                        return resultSet.getString("password_hash");
                }
            }
        }
        return null;
    }

    public List<Entity> search(String firstName, String lastName) throws Throwable {
        try(Connection connection = dataSource.getConnection()) {
            try(PreparedStatement statementSearch = getStatementSearch(connection)) {
                statementSearch.setString(1, firstName + '%');
                statementSearch.setString(2, lastName + '%');
                try(ResultSet resultSet = statementSearch.executeQuery()) {
                    List<Entity> result = new ArrayList<>();
                    while (resultSet.next())
                        result.add(buildEntity(resultSet.getString("id"), resultSet));
                    if(!result.isEmpty())
                        return result;
                }
            }
        }
        return null;
    }

}