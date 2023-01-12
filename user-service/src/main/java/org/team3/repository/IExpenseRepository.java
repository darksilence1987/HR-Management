package org.team3.repository;

import org.springframework.stereotype.Repository;
import org.team3.repository.entity.Expense;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.team3.repository.enums.ExpenseStatus;

import java.util.List;
import java.util.Optional;

@Repository
public interface IExpenseRepository extends MongoRepository<Expense, String> {
    List<Expense> findAllByUserEmail(String userEmail);


    Optional<List<Expense>> findAllOptionalByUserEmailAndExpenseStatus(String userEmail, ExpenseStatus expenseStatus);

    Optional<List<Expense>> findAllOptionalByUserEmail(String userEmail);

    List<Expense> findAllByCorporationName(String corporationName);
}

