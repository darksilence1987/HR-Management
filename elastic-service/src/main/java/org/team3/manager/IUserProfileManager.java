package org.team3.manager;



import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.team3.repository.entity.User;

import java.util.List;

import static org.team3.constant.ApiUrls.USER_GETALL;


@FeignClient(name = "user-service", url = "${myapplication.user-service.feign-client}/user", decode404 = true)
public interface IUserProfileManager {

    @GetMapping(USER_GETALL)
    ResponseEntity<List<User>> getAll();


}
