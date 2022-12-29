package org.team3.manager;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.team3.dto.request.UserDetailsRequestDto;

import static org.team3.constant.ApiUrls.USERCREATE;

@FeignClient(url="http://10.8.13.78:9091/api/v1/user" ,name="user-service-application", decode404 = true)
public interface IUserManager {
    @PostMapping(USERCREATE)
    public ResponseEntity<Boolean> createUser(@RequestBody UserDetailsRequestDto dto);
}
