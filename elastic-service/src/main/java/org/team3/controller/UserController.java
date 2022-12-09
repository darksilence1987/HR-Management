package org.team3.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.team3.service.UserService;

import static org.team3.constant.ApiUrls.*;

@RestController
@RequestMapping(ELASTIC)
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping(GETALL)
    public ResponseEntity<Iterable> getAll(){
        return ResponseEntity.ok(userService.findAll());
    }
}
