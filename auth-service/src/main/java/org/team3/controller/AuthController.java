package org.team3.controller;


import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.team3.dto.request.RegisterRequestDto;
import org.team3.exception.AuthServiceException;
import org.team3.exception.ErrorType;
import org.team3.repository.entity.UserAuth;
import org.team3.service.AuthService;

import javax.validation.Valid;

import static org.team3.constant.ApiUrls.*;
import static org.team3.constant.ApiUrls.USERCREATE;


@RestController
@RequiredArgsConstructor
@RequestMapping(AUTH)
public class AuthController {

    private final AuthService authService;

    @CrossOrigin("*")
    @PostMapping("/register")
    public ResponseEntity<Boolean> registerUser(@RequestBody @Valid UserAuth registerUserAuth) {
        try {
            return ResponseEntity.ok(authService.registerUser(registerUserAuth));
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
    @CrossOrigin("*")
    @PostMapping("/login")
    public ResponseEntity<Boolean> loginUser(@RequestBody @Valid UserAuth loginUserAuth) {
        System.out.println(loginUserAuth);
        try {
            Boolean success = authService.loginUser(loginUserAuth);
            return ResponseEntity.ok(success);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping(USERCREATE)
    public ResponseEntity<Boolean> createUser(@RequestBody RegisterRequestDto dto) {
        try {
            authService.createUser(dto);
            return ResponseEntity.ok(true);
        } catch (Exception e) {
            throw new AuthServiceException(ErrorType.USER_NOT_CREATED);
        }
    }


}
