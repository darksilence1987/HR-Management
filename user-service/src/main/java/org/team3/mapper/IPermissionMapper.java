package org.team3.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import org.mapstruct.factory.Mappers;
import org.team3.dto.request.ExpenseRequestDto;
import org.team3.dto.request.PermissionRequestDto;
import org.team3.dto.response.UserDetailsResponseDto;
import org.team3.dto.response.UserSummaryResponseDto;
import org.team3.repository.entity.Expense;
import org.team3.repository.entity.Permission;
import org.team3.repository.entity.User;

import java.util.List;

@Mapper(componentModel = "spring",unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface IPermissionMapper {
    IPermissionMapper INSTANCE= Mappers.getMapper(IPermissionMapper.class);

    Permission toPermission(PermissionRequestDto dto);





    List<UserSummaryResponseDto> toUserListSummaryResponseDto(final List<User> users);

    UserDetailsResponseDto toUserDetailsResponseDto(User user);


}
