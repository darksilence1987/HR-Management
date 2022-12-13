package org.team3.service;
import org.springframework.stereotype.Service;
import org.team3.repository.IAuthRepository;
import org.team3.repository.entity.LoginDetails;
import org.team3.repository.entity.UserAuth;
import org.team3.utility.ServiceManager;

import java.util.Optional;


@Service
public class AuthService extends ServiceManager<UserAuth, Long> {

    private final IAuthRepository authRepository;


    public AuthService(IAuthRepository authRepository) {
        super(authRepository);
        this.authRepository = authRepository;
    }
    public Boolean registerUser(UserAuth registerUserAuth) {
        try {
            authRepository.save(registerUserAuth);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
    public Boolean loginUser(UserAuth loginDetails) {
        try {
            Optional<UserAuth> userAuth = authRepository.findOptionalByEmailAndPassword(loginDetails.getEmail(), loginDetails.getPassword());
            if (userAuth != null) {
                if (userAuth.isPresent()) {
                    return true;
                }
                return false;
            }
        } catch (Exception e) {
        }
        return false;
    }
}



