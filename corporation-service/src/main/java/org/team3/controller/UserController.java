package org.team3.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.team3.exception.ErrorType;
import org.team3.exception.CorporationServiceException;


import javax.validation.Valid;
import java.util.List;

import static org.team3.constant.ApiUrls.*;


@RestController
@RequestMapping(CORPORATION)
@RequiredArgsConstructor
public class UserController {

//    private final CorporationService userService;

//    @CrossOrigin("*")
//    @PostMapping(CORPORATIONCREATE)
//    public ResponseEntity<Boolean> createUser(@RequestBody UserDetailsRequestDto dto) {
//        try {
//            userService.createUser(dto);
//            return ResponseEntity.ok(true);
//        } catch (Exception e) {
//            throw new CorporationServiceException(ErrorType.USER_NOT_CREATED);
//        }
//    }


//    @CrossOrigin("*")
//    @GetMapping(GETALLCORPORATIONSSUMMARYINFO)
//    public ResponseEntity<List<UserSummaryResponseDto>> getAllUsersSummaryInfo(){
//        return ResponseEntity.ok(userService.getAllUsersSummaryInfo());
//    }


}
