package org.team3.manager;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.team3.dto.response.UserDetailsResponseDto;
import org.team3.dto.response.UserSummaryResponseDto;
import org.team3.repository.entity.UserProfile;

import java.util.List;
import java.util.Optional;


@FeignClient(url="http://10.8.13.78:9091/api/v1/user" ,name="user-service-application", decode404 = true)

public interface IUserManager {
    @PostMapping("/get-user-by-email")
    public UserDetailsResponseDto loginRequest(@RequestBody String email);


    @GetMapping("/get-user-details-list")
    public List<UserSummaryResponseDto> getAllUsersSummaryInfo();
}
