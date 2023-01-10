package org.team3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.team3.controller.MailController;

@SpringBootApplication
@EnableFeignClients
public class MailServiceApplication {

    @Autowired
    private MailController mailController;

    public static void main(String[] args) {
        SpringApplication.run(MailServiceApplication.class, args);
    }

}