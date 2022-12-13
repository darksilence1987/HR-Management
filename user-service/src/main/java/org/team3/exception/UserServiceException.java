package org.team3.exception;

import lombok.Getter;
import org.springframework.transaction.annotation.Transactional;
import org.team3.dto.request.UserDetailsRequestDto;
import org.team3.repository.entity.User;

@Getter
public class UserServiceException extends RuntimeException{
    private final ErrorType errorType;

    public UserServiceException(ErrorType errorType){
        super(errorType.getMessage());
        this.errorType = errorType;
    }

    public UserServiceException(ErrorType errorType, String message){
        super(message);
        this.errorType = errorType;
    }


}