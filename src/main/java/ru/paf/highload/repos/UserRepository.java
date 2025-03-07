package ru.paf.highload.repos;

import java.time.LocalDate;

public class UserRepository {
    public UserRepository() {
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