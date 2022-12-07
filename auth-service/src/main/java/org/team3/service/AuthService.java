package org.team3.service;
import org.springframework.stereotype.Service;
import org.team3.repository.IAuthRepository;
import org.team3.repository.entity.LoginDetails;
import org.team3.utility.ServiceManager;


@Service
public class AuthService extends ServiceManager<LoginDetails, Long> {

    private final IAuthRepository authRepository;


    public AuthService(IAuthRepository authRepository) {
        super(authRepository);
        this.authRepository = authRepository;
    }

    }



