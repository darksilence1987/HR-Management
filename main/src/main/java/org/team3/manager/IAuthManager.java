package org.team3.manager;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.team3.dto.request.AuthRegisterRequestDto;
import org.team3.dto.request.LoginRequestDto;

import javax.validation.Valid;

import static org.team3.constant.ApiUrls.REQUESTPASSWORD;
import static org.team3.constant.ApiUrls.USERCREATE;

@FeignClient(url="http://10.76.4.36:9090/api/v1/auth", name="auth-service-application", decode404 = true)
public interface IAuthManager {
    @PostMapping("/login")
    public Boolean loginUser(@RequestBody @Valid LoginRequestDto loginUserAuth);

    @PostMapping(USERCREATE)
    public ResponseEntity<Boolean> createUser(@RequestBody @Valid AuthRegisterRequestDto dto);

    @PostMapping(REQUESTPASSWORD)
    boolean requestPassword(@RequestBody  String email);
}
