package ru.paf.highload.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.context.request.NativeWebRequest;
import ru.paf.highload.model.User;
import ru.paf.highload.model.UserRegisterPost200Response;
import ru.paf.highload.model.UserRegisterPostRequest;
import ru.paf.highload.repos.UserRepository;

import javax.annotation.Generated;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2025-03-06T15:13:16.556718+03:00[Europe/Moscow]", comments = "Generator version: 7.10.0")
@Controller
@RequestMapping("${openapi.oTUSHighloadArchitect.base-path:}")
public class UserApiController implements UserApi {

    private final NativeWebRequest request;

    private final UserRepository repository;

    @Autowired
    public UserApiController(NativeWebRequest request, UserRepository repository) {
        this.request = request;
        this.repository = repository;
    }

    @Override
    public Optional<NativeWebRequest> getRequest() {
        return Optional.ofNullable(request);
    }

    public class NoEntityException extends RuntimeException {
    }

    @Override
    public ResponseEntity<User> userGetIdGet(String id) throws SQLException {
        UserRepository.Entity entity = repository.get(id);
        if (entity == null)
            throw new NoEntityException();
        return new ResponseEntity<User>(new User()
            .firstName(entity.getFirstName())
            .secondName(entity.getSecondName())
            .birthdate(entity.getBirthdate())
            .biography(entity.getBiography())
            .city(entity.getCity()), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<UserRegisterPost200Response> userRegisterPost(UserRegisterPostRequest userRegisterPostRequest) throws SQLException {
        String userId = UUID.randomUUID().toString();
        repository.add(UserRepository.Entity.builder()
            .id(userId)
            .firstName(userRegisterPostRequest.getFirstName())
            .secondName(userRegisterPostRequest.getSecondName())
            .birthdate(userRegisterPostRequest.getBirthdate())
            .biography(userRegisterPostRequest.getBiography())
            .city(userRegisterPostRequest.getCity())
            .password(userRegisterPostRequest.getPassword())
            .build()
        );
        return new ResponseEntity<>(new UserRegisterPost200Response().userId(userId), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<List<User>> userSearchGet(String firstName, String lastName) {
        return UserApi.super.userSearchGet(firstName, lastName);
    }

}
