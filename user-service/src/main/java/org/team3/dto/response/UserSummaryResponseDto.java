package org.team3.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.team3.repository.enums.Role;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserSummaryResponseDto {
    private String id;
    private String name;
    private String surname;
    private String email;
    private String phone;
    private String photo;
    private String address;
    private String job;
    private String department;
    private Role role;

}
