package org.team3.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.team3.repository.entity.UserProfile;
import org.team3.service.MainService;

import static org.team3.constant.ApiUrls.*;

@RestController
@RequiredArgsConstructor
@RequestMapping(MAIN)
public class MainController {
    private final MainService mainservice;

    @PostMapping("/login-request")
    public void loginRequest(@RequestParam String email) {
        UserProfile user = mainservice.getUserProfile(email);
    }




}
