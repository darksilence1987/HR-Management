package org.team3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.team3.dto.MailSenderDto;
import org.team3.service.MailController;

@SpringBootApplication
public class MailexampleApplication implements CommandLineRunner {

    @Autowired
    private MailController mailController;

    public static void main(String[] args) {
        SpringApplication.run(MailexampleApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        mailController.sendMail(MailSenderDto.builder()
                        .icerik("aaaaa")
                        .konu("bbbbbbb")
                        .mailAdres("burakozer@gmail.com")

                .build());
    }
}