package org.team3.manager;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(url="http://10.8.3.169:9098/api/v1/main", name="main-service-application", decode404 = true)
public interface IMainManager {
    @PostMapping("/login-request")
    public ResponseEntity<Void> loginRequest(@RequestParam String email);

}
