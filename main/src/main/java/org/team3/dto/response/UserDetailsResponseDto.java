package org.team3.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.team3.repository.enums.Role;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor

public class UserDetailsResponseDto {
    String email;
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
    String corporationName;
    String phone;
    String address;
    Role role;
}
