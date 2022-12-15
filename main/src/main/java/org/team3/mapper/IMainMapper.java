package org.team3.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import org.mapstruct.factory.Mappers;
import org.springframework.http.ResponseEntity;
import org.team3.dto.request.UserUpdateInfoFromManagerRequestDto;
import org.team3.dto.request.UserUpdateInfoFromUserRequestDto;
import org.team3.dto.response.UserDetailsResponseDto;
import org.team3.dto.response.UserSummaryResponseDto;
import org.team3.repository.entity.UserProfile;
import org.team3.repository.enums.Role;

import java.util.List;

@Mapper(componentModel = "spring",unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface IMainMapper {


        IMainMapper INSTANCE= Mappers.getMapper(IMainMapper.class);
        UserProfile toUserProfile(UserDetailsResponseDto dto);
        List<UserProfile> toUserProfileList(List<UserSummaryResponseDto> dtoList);
        UserUpdateInfoFromManagerRequestDto toUserUpdateInfoFromManagerRequestDto(UserProfile userProfile);
        UserUpdateInfoFromUserRequestDto toUserUpdateInfoFromUserRequestDto(UserProfile userProfile);




}
