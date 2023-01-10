package org.team3.manager;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.team3.dto.request.UserDetailsRequestDto;
import org.team3.dto.request.UserUpdateInfoFromManagerRequestDto;
import org.team3.dto.request.UserUpdateInfoFromUserRequestDto;
import org.team3.dto.response.UserDetailsResponseDto;
import org.team3.dto.response.UserSummaryResponseDto;


import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

import static org.team3.constant.ApiUrls.*;


@FeignClient(url="http://10.76.11.124:9091/api/v1/user" ,name="user-service-application", decode404 = true)

public interface IUserManager {
    @PostMapping("/get-user-by-email")
    public UserDetailsResponseDto loginRequest(@RequestBody String email);


    @GetMapping("/get-user-details-list")
    public List<UserSummaryResponseDto> getAllUsersSummaryInfo();

    @PutMapping(UPDATEUSERFROMMANAGER)
    public ResponseEntity<Boolean> updateUserFromManager(@RequestBody @Valid UserUpdateInfoFromManagerRequestDto dto , @PathVariable String email);
    @PutMapping(UPDATEUSERFROMUSER)
    public ResponseEntity<Boolean> updateUserFromUser(@RequestBody @Valid UserUpdateInfoFromUserRequestDto dto , @PathVariable String email);

    @PostMapping(USERCREATE)
    public ResponseEntity<Boolean> createUser(@RequestBody UserDetailsRequestDto dto);
    @GetMapping(GETALLMANAGERSSSUMMARYINFO)
    public ResponseEntity<List<UserSummaryResponseDto>> getAllManagersSummaryInfo();


}


