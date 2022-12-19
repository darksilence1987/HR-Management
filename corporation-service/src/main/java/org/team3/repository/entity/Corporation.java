package org.team3.repository.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.team3.repository.enums.Status;

import javax.persistence.*;
import java.util.Date;

@Data
@Builder
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "tblcorporation")
public class Corporation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;
    String name;
    String title;
    String mersisNo;
    String taxNo;
    String taxOffice;
    String logo;
    String phone;
    String adress;
    String email;
    int numberOfEmployees;
    String foundationYear;
    Date contractStart;
    Date contractEnd;
    @Builder.Default
    @Enumerated(EnumType.STRING)
    Status statu = Status.Active;
}