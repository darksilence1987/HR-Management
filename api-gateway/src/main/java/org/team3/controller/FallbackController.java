package org.team3.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("")
public class FallbackController {

    @GetMapping("/mainservice")
    public ResponseEntity<String> mainServiceFallback(){
        return  ResponseEntity.ok("Main service �uanda hizmet vermiyor");
    }


    @GetMapping("/authservice")
    public ResponseEntity<String> authServiceFallback(){
        return  ResponseEntity.ok("Auth service �uanda hizmet vermiyor");
    }
    @GetMapping("/userservice")
    public ResponseEntity<String> userServiceFallback(){
        return  ResponseEntity.ok("User service �uanda hizmet vermiyor");
    }
    @GetMapping("/corporationservice")
    public ResponseEntity<String> corporationServiceFallback(){
        return  ResponseEntity.ok("Corporation service �uanda hizmet vermiyor");
    }

    @GetMapping("/mailservice")
    public ResponseEntity<String> mailServiceFallback(){
        return  ResponseEntity.ok("Post service �uanda hizmet vermiyor");
    }
}
