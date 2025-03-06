package ru.paf.highload.api;

import org.apache.catalina.connector.ResponseFacade;
import org.springframework.web.context.request.NativeWebRequest;

import java.io.IOException;

public class ApiUtil {
    public static void setExampleResponse(NativeWebRequest req, String contentType, String example) {
        try {
            ResponseFacade res = req.getNativeResponse(ResponseFacade.class);
            res.setCharacterEncoding("UTF-8");
            res.addHeader("Content-Type", contentType);
            res.getWriter().print(example);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
