package org.team3.repository.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.team3.repository.enums.ExpenseStatus;

import java.time.LocalDate;

@Document(collection = "expense")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Expense {
    @Id
    private String id;
    private String corporationName;
    private String expenseName;
    private String expenseDescription;
    private Long expenseAmount;
    private LocalDate expenseDate;
    private String userEmail;
    private ExpenseStatus expenseStatus;
    private LocalDate createdDate;



}
