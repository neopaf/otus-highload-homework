package ru.paf.highload.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.context.request.NativeWebRequest;

import javax.annotation.Generated;
import java.util.Optional;

@Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2025-03-06T15:13:16.556718+03:00[Europe/Moscow]", comments = "Generator version: 7.10.0")
@Controller
@RequestMapping("${openapi.oTUSHighloadArchitect.base-path:}")
public class FriendApiController implements FriendApi {

    private final NativeWebRequest request;

    @Autowired
    public FriendApiController(NativeWebRequest request) {
        this.request = request;
    }

    @Override
    public Optional<NativeWebRequest> getRequest() {
        return Optional.ofNullable(request);
    }

}
