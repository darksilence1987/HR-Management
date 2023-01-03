package org.team3.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.team3.dto.request.PermissionRequestDto;
import org.team3.dto.request.UserDetailsRequestDto;
import org.team3.exception.ErrorType;
import org.team3.exception.UserServiceException;
import org.team3.repository.entity.Permission;
import org.team3.repository.enums.Status;
import org.team3.service.PermissionService;
import org.team3.service.UserService;

import java.util.List;
import java.util.Optional;

import static org.team3.constant.ApiUrls.*;

@RestController
@RequestMapping(PERMISSION)
@RequiredArgsConstructor
public class PermissionController {
    private final PermissionService service;

    @CrossOrigin("*")
    @PostMapping(PERMISSIONCREATE)
    public ResponseEntity<String> createPermission(@RequestBody PermissionRequestDto dto, String email) {
        try {
            service.createPermission(dto, email);
            return ResponseEntity.ok("permission request created");
        } catch (Exception e) {
            throw new UserServiceException(ErrorType.PERM_NOT_CREATED);
        }
    }

    @CrossOrigin("*")
    @PostMapping(PERMISSIONREJECTED)
    public ResponseEntity<String> rejected(@RequestBody String userId) {
        return service.rejectPermission(userId);
    }



    @CrossOrigin("*")
    @PostMapping(PERMISSIONCONFIRMED)
    public ResponseEntity<String> confirmed(@RequestBody String userId) {
        System.out.println(userId);
        return service.acceptPermission(userId);
    }

    @CrossOrigin("*")
    @GetMapping(ALLPPERMISSIONS)
    public ResponseEntity<List<Permission>> findAll(String email) {
        return ResponseEntity.ok(service.getAll(email));
    }

    @CrossOrigin("*")
    @GetMapping(ALLFINALIZEDPERMISSIONS)
    public ResponseEntity<List<Permission>> findOldPermissions(String email) {
        return ResponseEntity.ok(service.getAllOld(email));
    }


    @CrossOrigin("*")
    @PostMapping("/findbyid")
    public ResponseEntity<Permission> findById(@RequestBody String userId) {
        System.out.println("1");
        return ResponseEntity.ok(service.findByUserId(userId));
    }
}
