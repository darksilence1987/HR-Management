package org.team3.service;
import org.springframework.stereotype.Service;
import org.team3.dto.request.AuthRegisterRequestDto;
import org.team3.dto.request.LoginRequestDto;
import org.team3.dto.request.MailSenderDto;
import org.team3.exception.AuthServiceException;
import org.team3.exception.ErrorType;
import org.team3.manager.IMailManager;
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
    private final IMailManager mailManager;


    public AuthService(IAuthRepository authRepository, PasswordGenerator passwordGenerator, IUserManager userManager, IMailManager mailManager) {
        super(authRepository);
        this.authRepository = authRepository;
        this.passwordGenerator = passwordGenerator;
        this.userManager = userManager;
        this.mailManager = mailManager;
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


            mailManager.sendMailAddressAndPassword(   MailSenderDto.builder()
                    .icerik("Dear User\n\nYou can sign in using the information below. \n\nPassword:"+user.getPassword()+
                            "\n \nEmail :"+user.getEmail()+"\n \nHr Management")
                    .konu("Login Information")
                    .mailAdres(user.getEmail())

                    .build());


            return true;

        } catch (Exception e) {
            e.printStackTrace();
            throw new AuthServiceException(ErrorType.USER_NOT_CREATED);
        }
    }



}



