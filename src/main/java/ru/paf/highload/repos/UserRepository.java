package ru.paf.highload.repos;

import org.springframework.stereotype.Component;

import java.sql.*;
import java.time.LocalDate;
import java.util.Random;

@Component
public class UserRepository {

    Random rnd = new Random();

    private ConfigProperties config;

    private Connection connection;
    private PreparedStatement statementAdd;

    public UserRepository(ConfigProperties config) throws ClassNotFoundException, SQLException {
        this.config = config;
        Class.forName("com.mysql.cj.jdbc.Driver");
        connection = DriverManager.getConnection(config.getConnectionString());
        statementAdd = connection.prepareStatement(
            "insert into user (" +
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

    public void add(
        String id,
        String firstName,
        String secondName,
        LocalDate birthdate,
        String biography,
        String city,
        String password
    ) throws SQLException {
        String salt = String.format("%06x", rnd.nextInt(0x1000000));
        statementAdd.setString(1, id);
        statementAdd.setString(2, firstName);
        statementAdd.setString(3, secondName);
        statementAdd.setDate(4, Date.valueOf(birthdate));
        statementAdd.setString(5, biography);
        statementAdd.setString(6, city);
        statementAdd.setString(7, salt);
        statementAdd.setString(8, salt+password);
        statementAdd.execute();
    }

}