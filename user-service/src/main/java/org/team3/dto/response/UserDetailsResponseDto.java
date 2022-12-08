package org.team3.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserDetailsResponseDto {
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
}
