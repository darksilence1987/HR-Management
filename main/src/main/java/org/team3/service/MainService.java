package org.team3.service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.team3.dto.request.AuthRegisterRequestDto;
import org.team3.dto.request.LoginRequestDto;
import org.team3.dto.request.UserDetailsRequestDto;
import org.team3.dto.request.UserUpdateInfoFromManagerRequestDto;
import org.team3.dto.response.UserDetailsResponseDto;
import org.team3.exception.ErrorType;
import org.team3.exception.MainServiceException;
import org.team3.manager.IAuthManager;
import org.team3.manager.IUserManager;
import org.team3.mapper.IMainMapper;
import org.team3.repository.entity.UserProfile;
import org.team3.repository.enums.Role;

import javax.validation.Valid;
import java.util.List;

@Service
public class MainService {
    private final IUserManager userManager;
    private final IAuthManager authManager;


    public MainService(IUserManager userManager, IAuthManager authManager) {
        this.userManager = userManager;
        this.authManager = authManager;
    }

    public UserProfile getUserProfile(String email) {
        UserDetailsResponseDto login = userManager.loginRequest(email);
        UserProfile userProfile = IMainMapper.INSTANCE.toUserProfile(login);
        System.out.println(userProfile);
        return userProfile;
    }
    public boolean requestPassword(String email) {

        System.out.println("requestPassword @ service");
        return authManager.requestPassword(email);
    }



    public ResponseEntity<UserProfile> checkLoginValid(LoginRequestDto dto) {
        // Auth servisten doğrulama yapılacak
        Boolean loginValid = authManager.loginUser(dto);
        // Eğer doğrulama başarılıysa gidip User serviceden bilgileri çekip UserProfile entitysine yazacak
        if (loginValid) {
            UserDetailsResponseDto login = userManager.loginRequest(dto.getEmail());
            UserProfile userProfile = IMainMapper.INSTANCE.toUserProfile(login);
            return ResponseEntity.ok(userProfile);
        } else return null;
    }

    public List<UserProfile> getUserDetailsList(String managerMail) {
        List<UserProfile> userProfiles;
        userProfiles = IMainMapper.INSTANCE.toUserProfileList(userManager.getAllUsersSummaryInfo());
        UserDetailsResponseDto userdto = userManager.loginRequest(managerMail);

        if (userdto.getRole().equals(Role.Manager)) {
            userProfiles = IMainMapper.INSTANCE.toUserProfileList(userManager.getAllUsersSummaryInfo());
            return userProfiles;
        } else throw new MainServiceException(ErrorType.YETKI_DISI);
    }

    public UserProfile getUserDetails(String recipientMail, String ownerMail) {
        if (recipientMail.equals(ownerMail)) {
            UserDetailsResponseDto userdto = userManager.loginRequest(ownerMail);
            UserProfile userProfile = IMainMapper.INSTANCE.toUserProfile(userdto);
            return userProfile;
        } else if (userManager.loginRequest(recipientMail).getRole().equals(Role.Manager)) {
            UserDetailsResponseDto userdto = userManager.loginRequest(ownerMail);
            UserProfile userProfile = IMainMapper.INSTANCE.toUserProfile(userdto);
            return userProfile;
        } else throw new MainServiceException(ErrorType.YETKI_DISI);

    }

    public void updateUserInfo(UserProfile userProfile, String actorMail) {
        if (userManager.loginRequest(actorMail).getRole().equals(Role.Manager)) {
            UserUpdateInfoFromManagerRequestDto dto = IMainMapper.INSTANCE.toUserUpdateInfoFromManagerRequestDto(userProfile);
            dto.setRole(userManager.loginRequest(userProfile.getEmail()).getRole());
            userManager.updateUserFromManager(dto, actorMail);
            //return true;
        } else if (userProfile.getEmail().equals(actorMail)) {
            userManager.updateUserFromUser(IMainMapper.INSTANCE.toUserUpdateInfoFromUserRequestDto(userProfile), actorMail);
            //return true;
        } else throw new MainServiceException(ErrorType.YETKI_DISI);
    }


    public void createUser(UserDetailsRequestDto dto) {

        try {


            userManager.createUser(dto);
            AuthRegisterRequestDto registerRequestDto = IMainMapper.INSTANCE.toAuthRegisterRequestDto(dto);
            authManager.createUser(registerRequestDto);
        } catch (Exception e) {

            e.printStackTrace();
            throw new MainServiceException(ErrorType.USER_NOT_CREATED);
        }

    }
}


