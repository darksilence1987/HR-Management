package org.team3.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserSummaryResponseDto {
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private String photo;
    private String address;
    private String job;
    private String department;

}
