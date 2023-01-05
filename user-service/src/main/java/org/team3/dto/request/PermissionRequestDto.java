package org.team3.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.team3.repository.enums.Status;

import java.time.LocalDate;
import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PermissionRequestDto {
    String userEmail;
    String permissionType;
    LocalDate startDate;
    int dayAmount;
}
