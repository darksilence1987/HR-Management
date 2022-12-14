package org.team3.manager;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.team3.dto.request.LoginRequestDto;

import javax.validation.Valid;

@FeignClient(url="http://localhost:9090/api/v1/auth", name="auth-service-application", decode404 = true)
public interface IAuthManager {
    @PostMapping("/login")
    public Boolean loginUser(@RequestBody @Valid LoginRequestDto loginUserAuth);
}
