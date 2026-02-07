package kr.co.ordermanagement.presentation.dto;

public class ErrorMessageDto {
    String message;

    public ErrorMessageDto(String message) {
        this.message = message;
    }

    public String getMessage() {
        return this.message;
    }
}