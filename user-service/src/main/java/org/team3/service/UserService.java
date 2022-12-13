package org.team3.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.team3.dto.request.UserDetailsRequestDto;
import org.team3.dto.request.UserUpdateInfoFromManagerRequestDto;
import org.team3.dto.request.UserUpdateInfoFromUserRequestDto;
import org.team3.exception.ErrorType;
import org.team3.exception.UserServiceException;
import org.team3.manager.IUserMapper;
import org.team3.repository.IUserRepository;
import org.team3.repository.entity.User;
import org.team3.utility.ServiceManager;

import java.util.Optional;

@Service
public class UserService extends ServiceManager<User, String> {
    private final IUserRepository repository;

    public UserService(IUserRepository repository) {
        super(repository);
        this.repository = repository;
    }

    public boolean updateUserFromUser(UserUpdateInfoFromUserRequestDto dto, String email) {

        Optional<User> userProfileDb = repository.findByEmail(email);
        if (userProfileDb.isPresent()) {
            userProfileDb.get().setAddress(dto.getAddress());
            userProfileDb.get().setPhone(dto.getPhone());
            userProfileDb.get().setPhoto(dto.getPhoto());
            save(userProfileDb.get());
            return true;
        } else {
            throw new UserServiceException(ErrorType.USER_NOT_FOUND);
        }
    }

    @Transactional
    public User createUser(UserDetailsRequestDto dto) {

        try {
            User user= repository.insert(IUserMapper.INSTANCE.toUser(dto));
            return user;
        } catch (Exception e) {

            e.printStackTrace();
            throw new UserServiceException(ErrorType.USER_NOT_CREATED);
        }

    }

    public boolean updateUserFromManager(UserUpdateInfoFromManagerRequestDto dto, String email) {

        Optional<User> userProfileDb = repository.findByEmail(email);
        if (userProfileDb.isPresent()) {
            userProfileDb.get().setAddress(dto.getAddress());
            userProfileDb.get().setPhone(dto.getPhone());
            userProfileDb.get().setPhoto(dto.getPhoto());
            userProfileDb.get().setRole(dto.getRole());
            userProfileDb.get().setName(dto.getName());
            userProfileDb.get().setBirthPlace(dto.getBirthPlace());
            userProfileDb.get().setSurname(dto.getSurname());
            userProfileDb.get().setSecondName(dto.getSecondName());
            userProfileDb.get().setBirthDate(dto.getBirthDate());
            userProfileDb.get().setStartDate(dto.getStartDate());
            userProfileDb.get().setJob(dto.getJob());
            userProfileDb.get().setDepartment(dto.getDepartment());
            userProfileDb.get().setEmail(dto.getEmail());
            userProfileDb.get().setSurname(dto.getSecondSurname());
            save(userProfileDb.get());
            return true;
        } else {
            throw new UserServiceException(ErrorType.USER_NOT_FOUND);
        }
    }


}
