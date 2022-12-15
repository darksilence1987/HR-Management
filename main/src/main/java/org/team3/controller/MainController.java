package org.team3.controller;

import lombok.RequiredArgsConstructor;
import org.apache.catalina.User;
import org.springframework.web.bind.annotation.*;
import org.team3.dto.request.LoginRequestDto;
import org.team3.exception.ErrorType;
import org.team3.exception.MainServiceException;
import org.team3.manager.IAuthManager;
import org.team3.repository.entity.UserProfile;
import org.team3.service.MainService;
import org.springframework.http.ResponseEntity;

import java.util.List;

import static org.team3.constant.ApiUrls.*;

@RestController
@RequiredArgsConstructor
@RequestMapping(MAIN)
public class MainController {
    private final MainService mainservice;
    private final IAuthManager authManager;

    @CrossOrigin("*")
    @PostMapping("/login-request")
    public ResponseEntity<UserProfile> login(@RequestBody LoginRequestDto dto){
        ResponseEntity<UserProfile> user = mainservice.checkLoginValid(dto);
        if(user != null){ //
            return user;
        }
        else throw new MainServiceException(ErrorType.LOGIN_ERROR_001);
    }
    @GetMapping("/get-user-details-list")
    public List<UserProfile> getUserDetailsList(@RequestParam String managerMail){
        return mainservice.getUserDetailsList(managerMail);
    }
    @PostMapping("/get-user-details")
    public UserProfile getUserDetails(@RequestParam String recipientMail, @RequestParam String ownerMail){
        return mainservice.getUserDetails(recipientMail, ownerMail);
    }




}

