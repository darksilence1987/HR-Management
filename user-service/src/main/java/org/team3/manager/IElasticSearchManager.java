package org.team3.manager;



import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.team3.repository.entity.User;

import static org.team3.constant.ApiUrls.*;



@FeignClient(name = "elastic-service", url = "${myapplication.elastic-service.feign-client}", decode404 = true)
public interface IElasticSearchManager {

//    @PostMapping(SAVE)
//    ResponseEntity<Void> save(@RequestBody User user);
//
//    @PostMapping(UPDATE)
//    ResponseEntity<Void> update(@RequestBody User user);

}





