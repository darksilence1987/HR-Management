package org.team3.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import org.mapstruct.factory.Mappers;
import org.team3.dto.request.CorporationCreateRequestDto;
import org.team3.dto.response.CorporationGetAllResponseDto;
import org.team3.dto.response.CorporationSummaryResponseDto;
import org.team3.repository.entity.Corporation;


import java.util.List;

@Mapper(componentModel = "spring",unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface ICorporationMapper {
    ICorporationMapper INSTANCE= Mappers.getMapper(ICorporationMapper.class);

Corporation toCorporation(final CorporationCreateRequestDto dto);

    CorporationCreateRequestDto toCorporationCreateRequestDto(final Corporation corporation);



    List<CorporationSummaryResponseDto> toUserListSummaryResponseDto(final List<Corporation> corporations);
    List<CorporationGetAllResponseDto> toUserListResponseDto(final List<Corporation> corporations);


}
