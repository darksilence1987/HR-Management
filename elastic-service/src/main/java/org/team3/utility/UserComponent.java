package org.team3.utility;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.team3.manager.IUserProfileManager;
import org.team3.repository.entity.User;
import org.team3.service.UserService;

import javax.annotation.PostConstruct;
import java.util.List;

@Component
@RequiredArgsConstructor
public class UserComponent {

    private final IUserProfileManager iUserProfileManager;

    private final UserService userService;

    /**
     * postconstruct program ayağa kalktığında çalışışr.
     */
    @PostConstruct
    public void firstRun(){
//        List<User> user = iUserProfileManager.userList().getBody();
//        userProfiles.forEach(userProfile -> {
//            userProfile.setId(null);
//            userProfile.setUserId(Long.getLong(userProfile.getId()));
//
//            userService.save(userProfile);

//        });

    }
}
