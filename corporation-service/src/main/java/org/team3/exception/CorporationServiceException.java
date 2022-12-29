package org.team3.exception;

import lombok.Getter;

@Getter
public class CorporationServiceException extends RuntimeException{
    private final ErrorType errorType;

    public CorporationServiceException(ErrorType errorType){
        super(errorType.getMessage());
        this.errorType = errorType;
    }

    public CorporationServiceException(ErrorType errorType, String message){
        super(message);
        this.errorType = errorType;
    }


}