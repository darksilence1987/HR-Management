package org.team3.controller;


import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.team3.dto.request.AuthRegisterRequestDto;
import org.team3.dto.request.LoginRequestDto;

import org.team3.dto.request.UserDetailsRequestDto;
import org.team3.exception.AuthServiceException;
import org.team3.exception.ErrorType;
import org.team3.repository.entity.UserAuth;
import org.team3.service.AuthService;

import javax.validation.Valid;

import java.util.List;

import static org.team3.constant.ApiUrls.*;


@RestController
@RequiredArgsConstructor
@RequestMapping(AUTH)
public class AuthController {

    private final AuthService authService;

//    @CrossOrigin("*")
//    @PostMapping("/register")
//    public ResponseEntity<Boolean> registerUser(@RequestBody @Valid UserAuth registerUserAuth) {
//        try {
//            return ResponseEntity.ok(authService.registerUser(registerUserAuth));
//        } catch (Exception e) {
//            return ResponseEntity.badRequest().build();
//        }
//    }
    @CrossOrigin("*")
    @PostMapping("/login")
    public Boolean loginUser(@RequestBody @Valid LoginRequestDto loginUserAuth) {
        try {
            return authService.loginUser(loginUserAuth);
        } catch (Exception e) {
            return false;
        }
    }

    @PostMapping(USERCREATE)
    public ResponseEntity<Boolean> createUser(@RequestBody @Valid AuthRegisterRequestDto dto) {
        try {
            authService.createUser(dto);
            return ResponseEntity.ok(true);
        } catch (Exception e) {
            throw new AuthServiceException(ErrorType.USER_NOT_CREATED);
        }
    }

    @CrossOrigin("*")
    @PostMapping(REQUESTPASSWORD)
    boolean requestPassword(@RequestBody String email){

        System.out.println("email: " + email);
        try {
            return authService.requestPassword(email);
        } catch (Exception e) {
            throw new AuthServiceException(ErrorType.USER_NOT_CREATED);
        }
    }


}
