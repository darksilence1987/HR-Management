package org.team3.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import org.mapstruct.factory.Mappers;
import org.team3.dto.request.ExpenseRequestDto;
import org.team3.repository.entity.Expense;

@Mapper(componentModel = "spring",unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface IExpenseMapper {
    IExpenseMapper INSTANCE= Mappers.getMapper(IExpenseMapper.class);
    Expense toExpense(final ExpenseRequestDto dto);
}
