package org.team3.repository.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.team3.repository.enums.Role;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Document
public class User {
    @Id
    String id;
    Long authid;
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
    @Indexed(unique = true)
    String email;
    String phone;
    String address;
    Role role;
    String corporationName;

}