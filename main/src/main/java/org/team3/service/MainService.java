package org.team3.service;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.team3.dto.response.UserDetailsResponseDto;
import org.team3.manager.IUserManager;
import org.team3.mapper.IMainMapper;
import org.team3.repository.entity.UserProfile;

@Service
public class MainService {
    private final IUserManager userManager;


    public MainService(IUserManager userManager) {
        this.userManager = userManager;
    }
    public UserProfile getUserProfile(String email) {
        UserDetailsResponseDto login = userManager.loginRequest(email);
        UserProfile userProfile = IMainMapper.INSTANCE.toUserProfile(login);
        System.out.println(userProfile);
        return userProfile;
    }
}
