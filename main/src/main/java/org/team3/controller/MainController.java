package org.team3.controller;

import lombok.RequiredArgsConstructor;
import org.apache.catalina.User;
import org.springframework.web.bind.annotation.*;
import org.team3.dto.request.LoginRequestDto;
import org.team3.dto.request.UserDetailsRequestDto;
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
    @GetMapping(REQUESTPASSWORD)
    public ResponseEntity<String> requestPassword(@RequestParam(name="email") String email) {
        System.out.println("requestPassword : "+email);
        if(mainservice.requestPassword(email)) {
            return ResponseEntity.ok("Password reset link sent to your email");
        }
        else {
            return ResponseEntity.ok("Email not found");
        }
    }

    @CrossOrigin("*")
    @PostMapping("/login-request")
    public ResponseEntity<UserProfile> login(@RequestBody LoginRequestDto dto){
        ResponseEntity<UserProfile> user = mainservice.checkLoginValid(dto);
        if(user != null){ //
            return user;
        }
        else throw new MainServiceException(ErrorType.LOGIN_ERROR_001);
    }
    @CrossOrigin("*")
    @PostMapping("/get-user-details-list")
    public List<UserProfile> getUserDetailsList(@RequestParam String managerMail){
        return mainservice.getUserDetailsList(managerMail);
    }
    @CrossOrigin("*")
    @PostMapping("/get-user-details")
    public UserProfile getUserDetails(@RequestParam String recipientMail, @RequestParam String ownerMail){
        return mainservice.getUserDetails(recipientMail, ownerMail);
    }
    @CrossOrigin("*")
    @PostMapping("/update-user-details")
    public void updateUserDetails(@RequestBody UserProfile userProfile, @RequestParam String ownerMail){
        mainservice.updateUserInfo(userProfile, ownerMail);
    }

    @CrossOrigin("*")
    @PostMapping("/create-user")
    public void createUser(@RequestBody UserDetailsRequestDto dto){
        mainservice.createUser(dto);
    }
}

