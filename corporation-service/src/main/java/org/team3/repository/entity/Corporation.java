package org.team3.repository.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.team3.repository.enums.Status;

import java.util.Date;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document
public class Corporation {
    @Id
    String id;
// manager?,  çalışanların mailini liste olarak tutar

    List<String> employeeMailList;
    String name;
    String title;
    String mersisNo;
    String taxNo;
    String taxOffice;
    String logo;
    String phone;
    String address;
    @Indexed(unique = true)
    String email;
    int numberOfEmployees;
    String foundationYear;
    Date contractStart;
    Date contractEnd;
    Status status = Status.Active;



   public void addEmployee(String email){
employeeMailList.add(email);
    }

}