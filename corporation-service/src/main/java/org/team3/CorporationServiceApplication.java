package org.team3;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class CorporationServiceApplication {


    public static void main(String[] args) {

        SpringApplication.run(CorporationServiceApplication.class,args);
    }
}