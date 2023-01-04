package org.team3.service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.team3.dto.request.PermissionRequestDto;
import org.team3.exception.ErrorType;
import org.team3.exception.UserServiceException;
import org.team3.mapper.IPermissionMapper;
import org.team3.repository.IPermissionRepository;
import org.team3.repository.IUserRepository;
import org.team3.repository.entity.Permission;
import org.team3.repository.entity.User;
import org.team3.repository.enums.Status;
import org.team3.utility.ServiceManager;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PermissionService extends ServiceManager<Permission, String> {
    private final IPermissionRepository repository;
    private final IUserRepository userRepository;

    public PermissionService(IPermissionRepository repository, IUserRepository userRepository) {
        super(repository);
        this.repository = repository;
        this.userRepository = userRepository;
    }

    public boolean createPermission(PermissionRequestDto dto, String email) {
        Optional<User> user = userRepository.findOptionalByEmail(email);
        Optional<Permission> userPermission = repository.findOptionalByUserIdAndStatus(user.get().getId(), Status.PENDING);
        try {
            if(user.isPresent() && userPermission.isEmpty()){
                Permission permission = repository.insert(IPermissionMapper.INSTANCE.toPermission(dto));
                permission.setStatus(Status.PENDING);
                permission.setUserId(user.get().getId());
                permission.setCorporationName(user.get().getCorporationName());
                permission.setRequestDate(LocalDate.now());
                repository.save(permission);
            }else {
                throw new UserServiceException(ErrorType.USER_HAS_PERMISSION);
            }
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            throw new UserServiceException(ErrorType.PERM_NOT_CREATED);
        }
    }

    public ResponseEntity<String> rejectPermission(String userId) {
        Optional<Permission> permission = repository.findOptionalByUserIdAndStatus(userId, Status.PENDING);
        try {
            if(permission.get().getStatus().equals(Status.PENDING)){
                permission.get().setStatus(Status.REJECTED);
                permission.get().setResponseDate(LocalDate.now());
                save(permission.get());
            }
            return ResponseEntity.ok("Permission request denied.");
        } catch (Exception e) {
            throw new UserServiceException(ErrorType.USER_NOT_CREATED);
        }
    }

    public ResponseEntity<String> acceptPermission(String userId) {
        Optional<Permission> permission = repository.findOptionalByUserIdAndStatus(userId, Status.PENDING);
        try {
            if(permission.get().getStatus().equals(Status.PENDING)){
                permission.get().setStatus(Status.CONFIRMED);
                permission.get().setResponseDate(LocalDate.now());
                save(permission.get());
            }
            return ResponseEntity.ok("Permission request accepted.");
        } catch (Exception e) {
            throw new UserServiceException(ErrorType.USER_NOT_CREATED);
        }
    }


    public List<Permission> getAll(String email) {
        String corporation = userRepository.findOptionalByEmail(email).get().getCorporationName();
        System.out.println(corporation);
        return repository.findAllByCorporationName(corporation).get();

    }

    public List<Permission> getAllOld(String email) {
        List<Permission> all = getAll(email);
        List<Permission> allOld = all.stream().filter(
                x -> !x.getStatus().equals(Status.PENDING))
                .collect(Collectors.toList());
        return allOld;
    }

    public Permission findByUserId(String userId) {

        System.out.println("2");
        return repository.findOptionalByUserIdAndStatus(userId, Status.PENDING).get();

    }
}
