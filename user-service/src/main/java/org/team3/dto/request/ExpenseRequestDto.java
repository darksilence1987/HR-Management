package org.team3.dto.request;

import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ExpenseRequestDto {
    private String userEmail;
    private String companyName;
    private String expenseId;
    private String expenseStatus;
    private String expenseName;
    private String expenseDescription;
    private String expenseAmount;
    private String expenseDate;
    private String corporationName;
}
