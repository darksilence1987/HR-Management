package org.team3.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.team3.dto.request.ExpenseRequestDto;
import org.team3.exception.ErrorType;
import org.team3.exception.UserServiceException;
import org.team3.repository.entity.Expense;
import org.team3.service.ExpenseService;

import java.util.List;

import static org.team3.constant.ApiUrls.*;

@RestController
@RequestMapping(EXPENSE)
@RequiredArgsConstructor
public class ExpenseController {
    private final ExpenseService service;



    @CrossOrigin("*")
    @PostMapping(EXPENSE_CREATE)
    public ResponseEntity<String> createExpense(@RequestBody ExpenseRequestDto dto) {
        try {
            return ResponseEntity.ok(service.createExpense(dto));
        } catch (Exception e) {
            throw new UserServiceException(ErrorType.EXP_NOT_CREATED);
        }
    }

    @CrossOrigin("*")
    @PostMapping(EXPENSE_REJECTED)
    public ResponseEntity<String> rejected(@RequestBody ExpenseRequestDto dto) {
        return ResponseEntity.ok(service.rejectExpense(dto.getUserEmail()));
    }


    @CrossOrigin("*")
    @PostMapping(EXPENSE_CONFIRMED)
    public ResponseEntity<String> confirmed(@RequestBody ExpenseRequestDto dto) {
        return ResponseEntity.ok(service.acceptExpense(dto.getUserEmail()));
    }

    @CrossOrigin("*")
    @PostMapping(GET_ALL_EXPENSES_OF_USER)
    public ResponseEntity<List<Expense>> findAllExpensesFromAnEmployee(@RequestBody ExpenseRequestDto dto) {

        return ResponseEntity.ok(service.getAllByUser(dto.getUserEmail()));
    }
    @CrossOrigin("*")
    @PostMapping(GET_ALL_EXPENSES_OF_CORPORATION)
    public ResponseEntity<List<Expense>> findAllExpensesOfACompany(@RequestBody ExpenseRequestDto dto) {

        return ResponseEntity.ok(service.getAllByCorporationName(dto.getCorporationName()));
    }

    @CrossOrigin("*")
    @PostMapping(ALLFINALIZED_EXPENSES)
    public ResponseEntity<List<Expense>> findFinalizedExpenses(@RequestBody ExpenseRequestDto dto) {
        return ResponseEntity.ok(service.getAllFinalized(dto.getUserEmail()));
    }


}
