package org.team3.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class RegisterRequestDto {
    @NotNull(message = "Email adresi girilmesi zorunludur.")
    @Size(min = 3, max=64)
    String email;
    @NotNull(message = "Şifre girilmesi zorunludur.")
    @Pattern(regexp = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=*!])(?=\\S+$).{8,}$",
            message = "Şifre en az 8 karakterden oluşmalıdır. En az bir büyük harf, bir küçük harf, bir sayı ve bir özel karakter içermelidir.")
    @Size(min = 8, max=64)
    String password;
    @Size(min = 4, max=64)
    String name;
    @Size(min = 4, max=64)
    String surname;
    @Size(min = 8, max=64)
    String phone;
    @Size(min = 4, max=64)
    String addres;

}
