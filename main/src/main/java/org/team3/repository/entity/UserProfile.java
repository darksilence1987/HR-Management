package org.team3.repository.entity;

import lombok.*;
import nonapi.io.github.classgraph.json.Id;
import org.team3.repository.enums.Role;



@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserProfile {
    @Id
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

    String phone;
    String address;
    Role role;
}