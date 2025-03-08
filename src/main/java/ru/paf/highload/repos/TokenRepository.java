package ru.paf.highload.repos;

import lombok.Builder;
import lombok.Data;
import org.springframework.stereotype.Component;

import java.sql.*;
import java.util.Random;

@Component
public class TokenRepository {

    @Data
    @Builder
    public static class Entity {
        private String user_id;
        private String token;
    }

    Random rnd = new Random();

    private final PreparedStatement statementAdd;
    private final PreparedStatement statementGet;

    public TokenRepository(ConfigProperties config) throws ClassNotFoundException, SQLException {
        Class.forName("com.mysql.cj.jdbc.Driver");
        Connection connection = DriverManager.getConnection(config.getConnectionString());
        statementAdd = connection.prepareStatement(
            "insert into token (" +
                "user_id," +
                "value) " +
                "values (?, ?)");

        statementGet = connection.prepareStatement(
            "select " +
                "value " +
                "from token where user_id = ?");
    }

    public void add(String user_id, String token) throws SQLException {
        statementAdd.setString(1, user_id);
        statementAdd.setString(2, token);
        statementAdd.execute();
    }

    public String get(String user_id) throws SQLException {
        statementGet.setString(1, user_id);

        ResultSet resultSet = statementGet.executeQuery();
        if (resultSet.next())
            return resultSet.getString("value");

        return null;
    }

}