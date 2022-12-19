package org.team3.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import org.mapstruct.factory.Mappers;
import org.team3.dto.request.UserDetailsRequestDto;
import org.team3.dto.response.UserDetailsResponseDto;
import org.team3.dto.response.UserSummaryResponseDto;
import org.team3.repository.entity.User;

import java.util.List;
import java.util.Optional;

@Mapper(componentModel = "spring",unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface IUserMapper {
    IUserMapper INSTANCE= Mappers.getMapper(IUserMapper.class);

    User toUser(UserDetailsRequestDto dto);
    List<UserSummaryResponseDto> toUserListSummaryResponseDto(final List<User> users);

    UserDetailsResponseDto toUserDetailsResponseDto(User user);
}
