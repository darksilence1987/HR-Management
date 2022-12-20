package org.team3.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class CorporationSummaryResponseDto {

    String name;
    String title;
    String email;
    String phone;
    String address;
}
