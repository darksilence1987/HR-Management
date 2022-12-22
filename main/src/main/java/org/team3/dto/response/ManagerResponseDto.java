package org.team3.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ManagerResponseDto {
    private String name;
    private String surname;
    private String email;
    private String phone;
    private String companyName;
}
