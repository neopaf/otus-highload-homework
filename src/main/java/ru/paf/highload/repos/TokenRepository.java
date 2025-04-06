package ru.paf.highload.repos;

import lombok.Builder;
import lombok.Data;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Random;

@Component
public class TokenRepository {

    private final DataSource dataSource;

    @Data
    @Builder
    public static class Entity {
        private String user_id;
        private String token;
    }

    Random rnd = new Random();

    public TokenRepository(DataSource dataSource) throws ClassNotFoundException, SQLException {
        this.dataSource = dataSource;
    }

    private static PreparedStatement getStatementGet(Connection connection) throws SQLException {
        return connection.prepareStatement(
            "select " +
                "value " +
                "from token where user_id = ?");
    }

    private static PreparedStatement getStatementAdd(Connection connection) throws SQLException {
        return connection.prepareStatement(
            "insert into token (" +
                "user_id," +
                "value) " +
                "values (?, ?)");
    }

    public void add(String user_id, String token) throws Throwable {
        try(Connection connection = dataSource.getConnection()) {
            try(PreparedStatement statementAdd = getStatementAdd(connection)) {
                statementAdd.setString(1, user_id);
                statementAdd.setString(2, token);
                statementAdd.execute();
            }
        }
    }

    public String get(String user_id) throws SQLException {
        try(Connection connection = dataSource.getConnection()) {
            try(PreparedStatement statementGet = getStatementGet(connection)) {
                statementGet.setString(1, user_id);

                try (ResultSet resultSet = statementGet.executeQuery()) {
                    if (resultSet.next())
                        return resultSet.getString("value");
                }
            }

        }
        return null;
    }

}