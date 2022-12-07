package org.team3.controller;


import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.team3.service.AuthService;

import static org.team3.constant.ApiUrls.*;


@RestController
@RequiredArgsConstructor
@RequestMapping(AUTH)

public class AuthController {


    private final AuthService authService;


}
