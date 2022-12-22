package org.team3.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.team3.repository.enums.Status;

import java.util.Date;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class CorporationGetAllResponseDto {

    String name;
    List<String> employeeMailList;
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
    Status status;

}
