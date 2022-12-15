package org.team3.service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.team3.dto.request.LoginRequestDto;
import org.team3.dto.response.UserDetailsResponseDto;
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

    public ResponseEntity<UserProfile> checkLoginValid(LoginRequestDto dto) {
        // Auth servisten doğrulama yapılacak
        Boolean loginValid = authManager.loginUser(dto);
        // Eğer doğrulama başarılıysa gidip User serviceden bilgileri çekip UserProfile entitysine yazacak
        if (loginValid) {
            UserDetailsResponseDto login = userManager.loginRequest(dto.getEmail());
            UserProfile userProfile = IMainMapper.INSTANCE.toUserProfile(login);
            return ResponseEntity.ok(userProfile);
        }
        else return null;
    }

    public ResponseEntity<List<UserProfile>> getUserDetailsList(String managerMail) {
        List<UserProfile> userProfiles;
        if(userManager.loginRequest(managerMail).getRole().equals(Role.Employee)) return null;
        else {
            userProfiles = IMainMapper.INSTANCE.toUserProfileList(userManager.getAllUsersSummaryInfo());
            return ResponseEntity.ok(userProfiles);
        }
    }
}
