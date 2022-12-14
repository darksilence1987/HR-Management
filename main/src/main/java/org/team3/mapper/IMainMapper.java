package org.team3.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import org.mapstruct.factory.Mappers;
import org.team3.dto.response.UserDetailsResponseDto;
import org.team3.repository.entity.UserProfile;

@Mapper(componentModel = "spring",unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface IMainMapper {


        IMainMapper INSTANCE= Mappers.getMapper(IMainMapper.class);
        UserProfile toUserProfile(UserDetailsResponseDto dto);




}
