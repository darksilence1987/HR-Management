package org.team3.service;

import org.springframework.boot.CommandLineRunner;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.team3.dto.MailSenderDto;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

@Service
public class MailService  {
    private JavaMailSender mailSender ;

    public MailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

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

//
// mailController.sendMailAddressAndPassword(MailSenderDto.builder()
//         .icerik("aaaaa")
//         .konu("Hr Manaement Login Informations")
//         .mailAdres("edasenem.94@hotmail.com")
//
//         .build());
//         }