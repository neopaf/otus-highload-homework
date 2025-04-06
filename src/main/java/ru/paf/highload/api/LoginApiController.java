package ru.paf.highload.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import ru.paf.highload.model.LoginPost200Response;
import ru.paf.highload.model.LoginPostRequest;
import ru.paf.highload.repos.TokenRepository;
import ru.paf.highload.repos.UserRepository;

import javax.annotation.Generated;
import java.util.UUID;

@Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2025-03-06T15:13:16.556718+03:00[Europe/Moscow]", comments = "Generator version: 7.10.0")
@Controller
@RequestMapping("${openapi.oTUSHighloadArchitect.base-path:}")
public class LoginApiController implements LoginApi {

    private final UserRepository userRepository;
    private final TokenRepository tokenRepository;

    @Autowired
    public LoginApiController(UserRepository userRepository, TokenRepository tokenRepository) {
        this.userRepository = userRepository;
        this.tokenRepository = tokenRepository;
    }

    @Override
    public ResponseEntity<LoginPost200Response> loginPost(LoginPostRequest request) throws Throwable {
        final String user_id = request.getId();
        UserRepository.Entity entity = userRepository.get(user_id);
        if (entity == null)
            throw new UserNotFound();

        String hash = userRepository.hash(entity.getPassword_salt(), request.getPassword());
        if (!hash.equals(entity.getPassword_hash()))
            throw new InvalidPassword();

        String token = UUID.randomUUID().toString();
        tokenRepository.add(user_id, token);

        return new ResponseEntity<>(new LoginPost200Response().token(token), HttpStatus.OK);
    }

}
