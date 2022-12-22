package org.team3.service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.team3.dto.MailSenderDto;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import static org.team3.constant.ApiUrls.MAIL;
import static org.team3.constant.ApiUrls.SENDMAIL;

@RestController
@RequiredArgsConstructor
@RequestMapping(MAIL)
public class MailController {

    @Autowired
    private JavaMailSender mailSender;
    @CrossOrigin("*")
@PostMapping(SENDMAIL)
    public String sendMail(MailSenderDto dto) {
        MimeMessage mimeMessage = mailSender.createMimeMessage();
        MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage);

        try {
            messageHelper.setTo(dto.getMailAdres());
            messageHelper.setText(dto.getIcerik());
            messageHelper.setSubject(dto.getKonu());
        } catch (MessagingException e) {
            e.printStackTrace();
            return "Error...";
        }
        mailSender.send(mimeMessage);
        return "Mail Sent!";
    }

}