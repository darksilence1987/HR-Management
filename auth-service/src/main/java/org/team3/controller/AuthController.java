package org.team3.controller;


import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.team3.repository.entity.LoginDetails;
import org.team3.service.AuthService;

import static org.team3.constant.ApiUrls.*;


@RestController
@RequiredArgsConstructor
@RequestMapping(AUTH)

public class AuthController {

    private final AuthService authService;

    @CrossOrigin("*")
    @PostMapping("/deneme")
    public ResponseEntity<LoginDetails> deneme(@RequestBody LoginDetails loginDetails) {
        System.out.println(loginDetails);
      return  ResponseEntity.ok(authService.save(loginDetails));

    }


}
