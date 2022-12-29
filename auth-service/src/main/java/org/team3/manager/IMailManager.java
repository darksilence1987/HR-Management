package org.team3.manager;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.team3.dto.request.MailSenderDto;

import static org.team3.constant.ApiUrls.SENDMAIL;

@FeignClient(url="http://localhost:8080/api/v1/mail", name="mail-service-application", decode404 = true)
public interface IMailManager {
    @CrossOrigin("*")
    @PostMapping(SENDMAIL)
    public void sendMailAddressAndPassword(@RequestBody MailSenderDto dto);

}


