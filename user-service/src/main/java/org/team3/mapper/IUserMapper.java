package org.team3.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import org.mapstruct.factory.Mappers;
import org.team3.dto.request.UserDetailsRequestDto;
import org.team3.repository.entity.User;

@Mapper(componentModel = "spring",unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface IUserMapper {
    IUserMapper INSTANCE= Mappers.getMapper(IUserMapper.class);

    User toUser(UserDetailsRequestDto dto);
}
