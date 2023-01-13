package org.team3.dto.request;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.team3.repository.enums.ExpenseStatus;
import org.team3.repository.enums.Status;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ExpenseRequestDto {

    private String userEmail;
    private ExpenseStatus expenseStatus;
    private String expenseName;
    private String expenseDescription;
    private Long expenseAmount;
    private LocalDate expenseDate;
    private LocalDate createdDate;
    private String corporationName;


}
