package org.team3.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.team3.dto.request.PermissionRequestDto;
import org.team3.dto.request.PermissionUserEmailRequestDto;
import org.team3.exception.ErrorType;
import org.team3.exception.UserServiceException;
import org.team3.repository.entity.Permission;
import org.team3.service.PermissionService;
import java.util.List;
import static org.team3.constant.ApiUrls.*;

@RestController
@RequestMapping(USER)
@RequiredArgsConstructor
public class PermissionController {
    private final PermissionService service;

    @CrossOrigin("*")
    @PostMapping(PERMISSIONCREATE)
    public ResponseEntity<String> createPermission(@RequestBody PermissionRequestDto dto) {
        try {
            service.createPermission(dto);
            return ResponseEntity.ok("permission request created");
        } catch (Exception e) {
            throw new UserServiceException(ErrorType.PERM_NOT_CREATED);
        }
    }

    @CrossOrigin("*")
    @PostMapping(PERMISSIONREJECTED)
    public ResponseEntity<String> rejected(@RequestBody PermissionUserEmailRequestDto dto) {
        return service.rejectPermission(dto.getUserEmail());
    }


    @CrossOrigin("*")
    @PostMapping(PERMISSIONCONFIRMED)
    public ResponseEntity<String> confirmed(@RequestBody PermissionUserEmailRequestDto dto) {
        return service.acceptPermission(dto.getUserEmail());
    }

    @CrossOrigin("*")
    @PostMapping(ALLPPERMISSIONS)
    public ResponseEntity<List<Permission>> findAll(@RequestBody PermissionUserEmailRequestDto dto) {

        return ResponseEntity.ok(service.getAll(dto.getUserEmail()));
    }

    @CrossOrigin("*")
    @PostMapping(ALLFINALIZEDPERMISSIONS)
    public ResponseEntity<List<Permission>> findOldPermissions(@RequestBody PermissionUserEmailRequestDto dto) {
        return ResponseEntity.ok(service.getAllOld(dto.getUserEmail()));
    }

}
