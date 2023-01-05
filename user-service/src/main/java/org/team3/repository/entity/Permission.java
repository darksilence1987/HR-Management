package org.team3.repository.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.team3.repository.enums.Status;

import java.time.LocalDate;
import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Document
public class Permission {
    @Id
    String id;
    String userEmail;
    String corporationName;
    String permissionType;
    LocalDate startDate;
    LocalDate requestDate;
    LocalDate responseDate;
    int dayAmount;
    Status status;

}
