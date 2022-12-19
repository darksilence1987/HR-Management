package org.team3.repository.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.team3.repository.enums.Status;

import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document
public class Corporation {
    @Id
    String id;
    String name;
    String title;
    String mersisNo;
    String taxNo;
    String taxOffice;
    String logo;
    String phone;
    String address;
    String email;
    int numberOfEmployees;
    String foundationYear;
    Date contractStart;
    Date contractEnd;
//    @Builder.Default
//    @Enumerated(EnumType.STRING)
    Status status = Status.Active;
}