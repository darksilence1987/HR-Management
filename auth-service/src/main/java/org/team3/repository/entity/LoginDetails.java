package org.team3.repository.entity;

import lombok.*;
import org.team3.repository.enums.Role;

import javax.persistence.*;

@Data
@Builder
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "tbllogindetails")
public class LoginDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;
    String email;
    String password;
    @Builder.Default
    @Enumerated(EnumType.STRING)
    Role role = Role.Employee;
}