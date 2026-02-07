package kr.co.shortenurlservice.presentation;

import jakarta.validation.constraints.NotNull;
import kr.co.shortenurlservice.domain.ShortenUrl;
import org.hibernate.validator.constraints.URL;

public class ShortenUrlCreateRequestDto {
    @NotNull
    @URL(regexp = "[(http(s)?):\\/\\/(www\\.)?a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)")
    private String originalUrl;

    public ShortenUrlCreateRequestDto() {
    }

    public ShortenUrlCreateRequestDto(String orginalUrl) {
        this.originalUrl = orginalUrl;
    }

    public String getOriginalUrl() {
        return originalUrl;
    }
}
