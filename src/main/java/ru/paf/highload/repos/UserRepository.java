package ru.paf.highload.repos;

import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
public class UserRepository {

    private ConfigProperties config;

    public UserRepository(ConfigProperties config) {
        this.config = config;
    }

    public void add(
        String firstName,
        String secondName,
        LocalDate birthdate,
        String biography,
        String city,
        String password
    ) {
        // TODO random salt
        // TODO md5(concat(Секретная строка,salt))
    }

}