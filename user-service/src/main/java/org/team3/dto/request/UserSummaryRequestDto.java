package org.team3.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class UserSummaryRequestDto {
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private String photo;
    private String address;
    private String job;
    private String department;

}
