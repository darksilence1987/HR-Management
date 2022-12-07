package org.team3.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class LoginRequestDto {
    @NotNull(message = "Email adresi girilmesi zorunludur.")
    @Size(min=3, max=64)
    String email;
    @NotNull(message = "Şifre girilmesi zorunludur.")
    @Size(min = 8, max=64)
    String password;
}
