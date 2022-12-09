package org.team3.repository.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Document(indexName = "userprofile")
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
    String email;
    String phone;
    String address;

}