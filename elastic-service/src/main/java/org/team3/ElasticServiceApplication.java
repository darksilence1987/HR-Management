package org.team3;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
//@EnableFeignClients
public class ElasticServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(ElasticServiceApplication.class,args);

    }
}