package org.team3.service;
import org.springframework.stereotype.Service;
import org.team3.dto.request.AuthRegisterRequestDto;
import org.team3.dto.request.LoginRequestDto;
import org.team3.exception.AuthServiceException;
import org.team3.exception.ErrorType;
import org.team3.manager.IUserManager;
import org.team3.mapper.IAuthMapper;
import org.team3.repository.IAuthRepository;
import org.team3.repository.entity.UserAuth;
import org.team3.utility.PasswordGenerator;
import org.team3.utility.ServiceManager;


@Service
public class AuthService extends ServiceManager<UserAuth, Long> {

    private final IAuthRepository authRepository;
    private final PasswordGenerator passwordGenerator;


    private final IUserManager userManager;


    public AuthService(IAuthRepository authRepository, PasswordGenerator passwordGenerator, IUserManager userManager) {
        super(authRepository);
        this.authRepository = authRepository;
        this.passwordGenerator = passwordGenerator;
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

    public boolean createUser(AuthRegisterRequestDto dto) {
        try {
            IAuthMapper iAuthMapper = IAuthMapper.INSTANCE;

            UserAuth user= iAuthMapper.toUserAuth(dto);
            user.setPassword(passwordGenerator.generateStrongPassword());
            authRepository.save(user);

            return true;

        } catch (Exception e) {
            e.printStackTrace();
            throw new AuthServiceException(ErrorType.USER_NOT_CREATED);
        }
    }



}



