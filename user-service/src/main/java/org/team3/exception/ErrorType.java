package org.team3.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;

import static org.springframework.http.HttpStatus.BAD_REQUEST;
import static org.springframework.http.HttpStatus.INTERNAL_SERVER_ERROR;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public enum ErrorType {
    INTERNAL_ERROR(2000, "Internal Server Error", INTERNAL_SERVER_ERROR),
    BAD_REQUEST_ERROR(2001, "Invalid Parameter Error", BAD_REQUEST),
    LOGIN_ERROR_001(190, "Kullanıcı adı ya da şifre hatalı", INTERNAL_SERVER_ERROR),
    KULLANICI_ZATEN_KAYITLI(100,"Bu Kullanınıcı adı zaten kayıtlı", INTERNAL_SERVER_ERROR),
    GECERSIZ_TOKEN(101,"Token gecerli degil", INTERNAL_SERVER_ERROR),

    USER_NOT_CREATED(1005, "Kullanıcı KAYDEDİLEMEDİ", INTERNAL_SERVER_ERROR),
    USER_NOT_FOUND(1004, "Kullanıcı bulunamadı", INTERNAL_SERVER_ERROR),
    MANAGER_NOT_CREATED(1005, "Manager KAYDEDİLEMEDİ", INTERNAL_SERVER_ERROR);



    private int code;
    private String message;
    HttpStatus httpStatus;

}
