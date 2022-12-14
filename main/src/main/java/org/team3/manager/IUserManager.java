package org.team3.manager;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.team3.dto.response.UserDetailsResponseDto;

import java.util.Optional;

@FeignClient(url="http://localhost:9091/api/v1/user" ,name="user-service-application", decode404 = true)

public interface IUserManager {
    @PostMapping("/get-user-by-email")
    public UserDetailsResponseDto loginRequest(@RequestBody String email);
}
