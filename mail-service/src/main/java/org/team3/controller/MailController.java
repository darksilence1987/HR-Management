package org.team3.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.team3.dto.MailSenderDto;
import org.team3.service.MailService;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import static org.team3.constant.ApiUrls.MAIL;
import static org.team3.constant.ApiUrls.SENDMAIL;

@RestController
@RequiredArgsConstructor
@RequestMapping(MAIL)
public class MailController  {
    private final MailService mailService;


    @CrossOrigin("*")
    @PostMapping(SENDMAIL)
    public void sendMailAddressAndPassword(@RequestBody  MailSenderDto dto) {
        mailService.sendMail(dto);
    }



}