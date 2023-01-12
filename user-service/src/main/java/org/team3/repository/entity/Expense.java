package org.team3.repository.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;
import org.team3.repository.enums.ExpenseStatus;

import java.time.LocalDate;

@Document(collection = "expense")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Expense {
    private String id;
    private String name;
    private String description;
    private String amount;
    private String date;
    private String category;
    private String userEmail;
    private ExpenseStatus expenseStatus;
    private String corporationName;
    private LocalDate createdDate;



}
