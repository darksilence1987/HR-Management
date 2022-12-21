package org.team3.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.team3.dto.request.CorporationCreateRequestDto;
import org.team3.dto.request.CorporationUpdateRequestDto;
import org.team3.dto.response.CorporationGetAllResponseDto;
import org.team3.dto.response.CorporationSummaryResponseDto;
import org.team3.service.CorporationService;


import javax.validation.Valid;
import java.util.List;

import static org.team3.constant.ApiUrls.*;



@RestController
@RequestMapping(CORPORATION)
@RequiredArgsConstructor
public class CorporationController {

    private final CorporationService userService;

    @CrossOrigin("*")
    @PostMapping(CORPORATIONCREATE)
    public ResponseEntity<Boolean> createCorporation(@RequestBody CorporationCreateRequestDto dto) {

            userService.createCorporation(dto);
            return ResponseEntity.ok(true);

    }



    @CrossOrigin("*")
    @PostMapping(CORPORATIONUPDATE)
    public ResponseEntity<Boolean> updateCorporation(@RequestBody CorporationUpdateRequestDto dto) {
        return ResponseEntity.ok(userService.updateCorporation(dto));
    }



    @CrossOrigin("*")
    @GetMapping(GETALLCORPORATIONSSUMMARYINFO)
    public ResponseEntity<List<CorporationSummaryResponseDto>> getAllCorporationsSummaryInfo(){
        return ResponseEntity.ok(userService.getAllCorporationsSummaryInfo());
    }

    @CrossOrigin("*")
    @GetMapping(GETALLCORPORATIONS)
    public ResponseEntity<List<CorporationGetAllResponseDto>> getAllCorporations(){
        return ResponseEntity.ok(userService.getAllCorporations());
    }


}
