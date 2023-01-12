package org.team3.mapper;

import org.mapstruct.factory.Mappers;
import org.team3.dto.request.ExpenseRequestDto;
import org.team3.repository.entity.Expense;

public interface IExpenseMapper {
    IExpenseMapper INSTANCE= Mappers.getMapper(IExpenseMapper.class);
    Expense toExpenseFromExpenseRequestDto(ExpenseRequestDto dto);
}
