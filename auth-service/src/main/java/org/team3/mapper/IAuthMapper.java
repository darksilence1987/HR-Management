package org.team3.mapper;


import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import org.mapstruct.factory.Mappers;
import org.team3.dto.request.AuthRegisterRequestDto;

import org.team3.dto.request.UserDetailsRequestDto;
import org.team3.repository.entity.UserAuth;

import java.util.List;

@Mapper(componentModel = "spring",unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface IAuthMapper {

    IAuthMapper INSTANCE= Mappers.getMapper(IAuthMapper.class);
    UserAuth toUserAuth(AuthRegisterRequestDto dto);

    UserDetailsRequestDto toUserDetailsRequestDto(AuthRegisterRequestDto dto);





}
