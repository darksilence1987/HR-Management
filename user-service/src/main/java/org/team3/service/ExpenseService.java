package org.team3.service;


import org.springframework.stereotype.Service;
import org.team3.dto.request.ExpenseRequestDto;
import org.team3.exception.ErrorType;
import org.team3.exception.UserServiceException;
import org.team3.mapper.IExpenseMapper;
import org.team3.repository.IExpenseRepository;
import org.team3.repository.IUserRepository;
import org.team3.repository.entity.Expense;
import org.team3.repository.entity.User;
import org.team3.repository.enums.ExpenseStatus;
import org.team3.utility.ServiceManager;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ExpenseService extends ServiceManager<Expense, String> {
    private final IExpenseRepository repository;
    private final IUserRepository userRepository;

    public ExpenseService(IExpenseRepository repository, IUserRepository userRepository) {
        super(repository);
        this.repository = repository;
        this.userRepository = userRepository;
    }


    public String createExpense(ExpenseRequestDto dto) {
        Optional<User> user = userRepository.findOptionalByEmail(dto.getUserEmail());
        Expense expense = IExpenseMapper.INSTANCE.toExpenseFromExpenseRequestDto(dto);
        try {
            if(user.isPresent()){
                expense.setExpenseStatus(ExpenseStatus.PENDING);
                expense.setUserEmail(user.get().getEmail());
                expense.setCorporationName(user.get().getCorporationName());
                repository.save(expense);
            }
            return expense.getId();
        } catch (Exception e) {
            e.printStackTrace();
            throw new UserServiceException(ErrorType.EXP_NOT_CREATED);
        }

    }

    public String rejectExpense(String userEmail) {
        Optional<List<Expense>> expenses = repository.findAllOptionalByUserEmailAndExpenseStatus(userEmail, ExpenseStatus.PENDING);
        if(expenses.isPresent()){
            expenses.get().forEach(expense -> {
                expense.setExpenseStatus(ExpenseStatus.REJECTED);
                repository.save(expense);
            });
        }
        return "Expense rejected";
    }

    public String acceptExpense(String userEmail) {
        Optional<List<Expense>> expenses = repository.findAllOptionalByUserEmailAndExpenseStatus(userEmail, ExpenseStatus.PENDING);
        if(expenses.isPresent()){
            expenses.get().forEach(expense -> {
                expense.setExpenseStatus(ExpenseStatus.APPROVED);
                repository.save(expense);
            });
        }
        return "Expense approved";
    }

    public List<Expense> getAll(String userEmail) {
        Optional<List<Expense>> expenses = repository.findAllOptionalByUserEmail(userEmail);
        if(expenses.isPresent()){
            return expenses.get();
        }
        return null;
    }

    public List<Expense> getAllByCorporationName(String corporationName) {
        List<Expense> expenses = repository.findAllByCorporationName(corporationName);
        return expenses;
    }
    public List<Expense> getAllByUser(String userEmail) {
        List<Expense> expenses = repository.findAllByUserEmail(userEmail);
        return expenses;
    }

    public List<Expense> getAllFinalized(String userEmail) {
        Optional<List<Expense>> expenses = repository.findAllOptionalByUserEmail(userEmail);
        if(expenses.isPresent()){
            return expenses.get().stream().filter(expense -> expense.getExpenseStatus().equals(ExpenseStatus.APPROVED) || expense.getExpenseStatus().equals(ExpenseStatus.REJECTED)).collect(Collectors.toList());
        }
        return null;
    }
}

