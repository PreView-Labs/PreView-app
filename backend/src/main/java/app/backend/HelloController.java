package app.backend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    // 기존 "/" 대신 "/api/hello"로 변경
    @GetMapping("/api/hello")
    public String home() {
        return "Hello! 백엔드 연결 성공입니다!";
    }
}