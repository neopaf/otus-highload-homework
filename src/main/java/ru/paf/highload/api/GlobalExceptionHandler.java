package ru.paf.highload.api;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import ru.paf.highload.model.LoginPost500Response;

@ControllerAdvice
public class GlobalExceptionHandler {
    @ResponseBody
    @ExceptionHandler
    @ResponseStatus(value = HttpStatus.NOT_FOUND)
    // TODO: content-type is wrong
    public String handleException(UserNotFound ignoredException) {
        return "No such user";
    }

    @ResponseBody
    @ExceptionHandler
    @ResponseStatus(value = HttpStatus.BAD_REQUEST)
    // TODO: content-type is wrong
    public String handleException(InvalidPassword ignoredException) {
        return "No such user or password is invalid";
    }

    @ResponseBody
    @ExceptionHandler
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public LoginPost500Response handleException(Exception exception) {
        return new LoginPost500Response()
            .message(exception.getMessage());
    }
}