package org.team3.controller;


import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.team3.repository.entity.LoginDetails;
import org.team3.service.AuthService;

import static org.team3.constant.ApiUrls.*;


@RestController
@RequiredArgsConstructor
@RequestMapping(AUTH)

public class AuthController {

    private final AuthService authService;

    @CrossOrigin
    @PostMapping("/deneme")
    public void deneme(@RequestBody LoginDetails loginDetails) {
        System.out.println("mail: " +loginDetails.getEmail()+ " password: " + loginDetails.getPassword());
        authService.save(loginDetails);
    }


}
