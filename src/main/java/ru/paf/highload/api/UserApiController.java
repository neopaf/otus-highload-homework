package ru.paf.highload.api;

import jakarta.annotation.Generated;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import ru.paf.highload.model.User;
import ru.paf.highload.model.UserRegisterPost200Response;
import ru.paf.highload.model.UserRegisterPostRequest;
import ru.paf.highload.repos.UserRepository;

import java.util.List;
import java.util.UUID;

@Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2025-04-06T09:54:10.188404+03:00[Europe/Moscow]", comments = "Generator version: 7.10.0")
@Controller
@RequestMapping("${openapi.oTUSHighloadArchitect.base-path:}")
public class UserApiController implements UserApi {

    private final UserRepository repository;

    @Autowired
    public UserApiController(UserRepository repository) {
        this.repository = repository;
    }

    @Override
    public ResponseEntity<User> userGetIdGet(String id) throws Throwable {
        UserRepository.Entity entity = repository.get(id);
        if (entity == null)
            throw new UserNotFound();
        return new ResponseEntity<>(buildUser(entity), HttpStatus.OK);
    }

    private static User buildUser(UserRepository.Entity entity) {
        return new User()
            .id(entity.getId())
            .firstName(entity.getFirstName())
            .secondName(entity.getSecondName())
            .birthdate(entity.getBirthdate())
            .biography(entity.getBiography())
            .city(entity.getCity());
    }

    @Override
    public ResponseEntity<UserRegisterPost200Response> userRegisterPost(UserRegisterPostRequest request) throws Throwable {
        String userId = UUID.randomUUID().toString();
        repository.add(UserRepository.Entity.builder()
            .id(userId)
            .firstName(request.getFirstName())
            .secondName(request.getSecondName())
            .birthdate(request.getBirthdate())
            .biography(request.getBiography())
            .city(request.getCity())
            .password(request.getPassword())
            .build()
        );
        return new ResponseEntity<>(new UserRegisterPost200Response().userId(userId), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<List<User>> userSearchGet(String firstName, String lastName) throws Throwable {
        List<UserRepository.Entity> list = repository.search(firstName, lastName);
        if (list == null)
            throw new UserNotFound();

        return new ResponseEntity<>(
            list.stream().map(entity -> buildUser(entity)).toList(),
            new HttpHeaders(), HttpStatus.OK);
    }

}
