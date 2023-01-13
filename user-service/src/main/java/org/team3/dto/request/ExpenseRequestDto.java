package org.team3.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.team3.repository.enums.ExpenseStatus;

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
