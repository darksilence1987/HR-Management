package org.team3.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.team3.repository.enums.Role;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class UserUpdateInfoFromManagerRequestDto {
    String photo;
    String name;
    String surname;
    String secondName;
    String secondSurname;
    String birthDate;
    String birthPlace;
    String startDate;
    String job;
    String department;
    String email;
    String phone;
    String address;

    Role role;

}
