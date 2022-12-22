package org.team3.service;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.team3.dto.request.LoginRequestDto;
import org.team3.dto.request.RegisterRequestDto;
import org.team3.dto.request.UserDetailsRequestDto;
import org.team3.exception.AuthServiceException;
import org.team3.exception.ErrorType;
import org.team3.manager.IUserManager;
import org.team3.mapper.IAuthMapper;
import org.team3.repository.IAuthRepository;
import org.team3.repository.entity.UserAuth;
import org.team3.utility.ServiceManager;

import java.util.List;
import java.util.Optional;


@Service
public class AuthService extends ServiceManager<UserAuth, Long> {

    private final IAuthRepository authRepository;


    private final IUserManager userManager;


    public AuthService(IAuthRepository authRepository, IUserManager userManager) {
        super(authRepository);
        this.authRepository = authRepository;
        this.userManager = userManager;
    }
//    public Boolean registerUser(UserAuth registerUserAuth) {
//        try {
//            authRepository.save(registerUserAuth);
//            return true;
//        } catch (Exception e) {
//            return false;
//        }
//    }
    public Boolean loginUser(LoginRequestDto loginDetails) {
        try {
            UserAuth userAuth = authRepository.findByEmailAndPassword(loginDetails.getEmail(), loginDetails.getPassword());
            if ((userAuth.getEmail().length()> 0)&& (userAuth.getPassword().length()>0)) {
                System.out.println(userAuth);
                    return true;
            }
            return false;
        } catch (Exception e) {
        }
        return false;
    }

    public boolean createUser(RegisterRequestDto dto) {
        try {
            IAuthMapper iAuthMapper = IAuthMapper.INSTANCE;
            UserAuth user= authRepository.save(iAuthMapper.toUserAuth(dto));
            userManager.createUser(iAuthMapper.toUserDetailsRequestDto(dto));
            return true;

        } catch (Exception e) {
            e.printStackTrace();
            throw new AuthServiceException(ErrorType.USER_NOT_CREATED);
        }
    }



}



