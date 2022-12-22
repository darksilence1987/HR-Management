package org.team3.controller;

import lombok.RequiredArgsConstructor;
import org.apache.catalina.User;
import org.springframework.web.bind.annotation.*;
import org.team3.dto.request.LoginRequestDto;
import org.team3.dto.request.UserDetailsRequestDto;
import org.team3.dto.request.UserUpdateInfoFromManagerRequestDto;
import org.team3.dto.response.ManagerResponseDto;
import org.team3.exception.ErrorType;
import org.team3.exception.MainServiceException;
import org.team3.manager.IAuthManager;
import org.team3.repository.entity.UserProfile;
import org.team3.service.MainService;
import org.springframework.http.ResponseEntity;

import javax.validation.Valid;
import java.util.List;

import static org.team3.constant.ApiUrls.*;
import static org.team3.constant.ApiUrls.GETALLMANAGER;

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
    @CrossOrigin("*")
    @GetMapping("/get-user-details-list")
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
    @PostMapping(MANAGERCREATE)
    public ResponseEntity<Boolean> createManager(@RequestBody UserDetailsRequestDto dto) {
        try {
            mainservice.createManager(dto);
            return ResponseEntity.ok(true);
        } catch (Exception e) {
            throw new MainServiceException(ErrorType.MANAGER_NOT_CREATED);
        }
    }
    @CrossOrigin("*")
    @PutMapping(UPDATEMANAGER)
    public ResponseEntity<Boolean> updateManager(@RequestBody @Valid UserUpdateInfoFromManagerRequestDto dto, @PathVariable String email) {
        return mainservice.updateManager(dto,email);
    }
    @CrossOrigin("*")
    @GetMapping(GETALLMANAGER)
    public ResponseEntity<List<ManagerResponseDto>> getAllManager(){
        return ResponseEntity.ok(mainservice.getAllManager());
    }



}

