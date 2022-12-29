package org.team3.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.team3.dto.request.UserDetailsRequestDto;
import org.team3.dto.request.UserUpdateInfoFromManagerRequestDto;
import org.team3.dto.request.UserUpdateInfoFromUserRequestDto;
import org.team3.dto.response.UserDetailsResponseDto;
import org.team3.dto.response.UserSummaryResponseDto;
import org.team3.exception.ErrorType;
import org.team3.exception.UserServiceException;
import org.team3.mapper.IUserMapper;
import org.team3.repository.entity.User;
import org.team3.repository.enums.Role;
import org.team3.service.UserService;

import javax.validation.Valid;

import java.util.List;
import java.util.Optional;

import static org.team3.constant.ApiUrls.*;


@RestController
@RequestMapping(USER)
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping(UPDATEUSERFROMUSER)
    @CrossOrigin("*")
    public ResponseEntity<Boolean> updateUserFromUser(@RequestBody @Valid UserUpdateInfoFromUserRequestDto dto) {
        return ResponseEntity.ok(userService.updateUserFromUser(dto));
    }

    @CrossOrigin("*")
    @PostMapping(USERCREATE)
    public ResponseEntity<Boolean> createUser(@RequestBody UserDetailsRequestDto dto) {
        try {
            userService.createUser(dto);
            return ResponseEntity.ok(true);
        } catch (Exception e) {
            throw new UserServiceException(ErrorType.USER_NOT_CREATED);
        }
    }

    @CrossOrigin("*")
    @PostMapping("/get-user-by-email")
    public UserDetailsResponseDto loginRequest(@RequestBody String email) {
        return userService.userDetailsResponseByEmail(email);
    }


    @CrossOrigin("*")
    @PostMapping(UPDATEUSERFROMMANAGER)
    public ResponseEntity<Boolean> updateUserFromManager(@RequestBody @Valid UserUpdateInfoFromManagerRequestDto dto, @PathVariable String email) {
        return ResponseEntity.ok(userService.updateUserFromManager(dto, email));
    }

    @CrossOrigin("*")
    @GetMapping(GETALLUSERSSUMMARYINFO)
    public ResponseEntity<List<UserSummaryResponseDto>> getAllUsersSummaryInfo() {
        return ResponseEntity.ok(userService.getAllUsersSummaryInfo());
    }


    @CrossOrigin("*")
    @GetMapping(GETALLMANAGERSSSUMMARYINFO)
    public ResponseEntity<List<UserSummaryResponseDto>> getAllManagersSummaryInfo() {
        return ResponseEntity.ok(userService.getAllManagersSummaryInfo());
    }

    @CrossOrigin("*")
    @GetMapping(ASSIGNMANAGER)
    public void assignManager(@RequestParam(name= "userEmail") String email) {
        userService.assignManager(email);
    }

    @CrossOrigin("*")
    @GetMapping(COMPANYWORKERS)
    public List<User> findCompanyWorkers(@RequestParam(name = "companyName") String companyName) {
        return userService.findCompanyWorkers(companyName );
    }


}
