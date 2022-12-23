package org.team3.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import org.team3.dto.request.CorporationCreateRequestDto;
import org.team3.dto.response.CorporationGetAllResponseDto;
import org.team3.dto.response.CorporationSummaryResponseDto;
import org.team3.repository.entity.Corporation;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-12-23T20:37:19+0300",
    comments = "version: 1.5.2.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.5.1.jar, environment: Java 17.0.5 (JetBrains s.r.o.)"
)
@Component
public class ICorporationMapperImpl implements ICorporationMapper {

    @Override
    public Corporation toCorporation(CorporationCreateRequestDto dto) {
        if ( dto == null ) {
            return null;
        }

        Corporation.CorporationBuilder corporation = Corporation.builder();

        corporation.name( dto.getName() );
        corporation.title( dto.getTitle() );
        corporation.mersisNo( dto.getMersisNo() );
        corporation.taxNo( dto.getTaxNo() );
        corporation.taxOffice( dto.getTaxOffice() );
        corporation.logo( dto.getLogo() );
        corporation.phone( dto.getPhone() );
        corporation.address( dto.getAddress() );
        corporation.email( dto.getEmail() );
        corporation.numberOfEmployees( dto.getNumberOfEmployees() );
        corporation.foundationYear( dto.getFoundationYear() );
        corporation.contractStart( dto.getContractStart() );
        corporation.contractEnd( dto.getContractEnd() );

        return corporation.build();
    }

    @Override
    public CorporationCreateRequestDto toCorporationCreateRequestDto(Corporation corporation) {
        if ( corporation == null ) {
            return null;
        }

        CorporationCreateRequestDto.CorporationCreateRequestDtoBuilder corporationCreateRequestDto = CorporationCreateRequestDto.builder();

        corporationCreateRequestDto.name( corporation.getName() );
        corporationCreateRequestDto.title( corporation.getTitle() );
        corporationCreateRequestDto.mersisNo( corporation.getMersisNo() );
        corporationCreateRequestDto.taxNo( corporation.getTaxNo() );
        corporationCreateRequestDto.taxOffice( corporation.getTaxOffice() );
        corporationCreateRequestDto.logo( corporation.getLogo() );
        corporationCreateRequestDto.phone( corporation.getPhone() );
        corporationCreateRequestDto.address( corporation.getAddress() );
        corporationCreateRequestDto.email( corporation.getEmail() );
        corporationCreateRequestDto.numberOfEmployees( corporation.getNumberOfEmployees() );
        corporationCreateRequestDto.foundationYear( corporation.getFoundationYear() );
        corporationCreateRequestDto.contractStart( corporation.getContractStart() );
        corporationCreateRequestDto.contractEnd( corporation.getContractEnd() );

        return corporationCreateRequestDto.build();
    }

    @Override
    public List<CorporationSummaryResponseDto> toUserListSummaryResponseDto(List<Corporation> corporations) {
        if ( corporations == null ) {
            return null;
        }

        List<CorporationSummaryResponseDto> list = new ArrayList<CorporationSummaryResponseDto>( corporations.size() );
        for ( Corporation corporation : corporations ) {
            list.add( corporationToCorporationSummaryResponseDto( corporation ) );
        }

        return list;
    }

    @Override
    public List<CorporationGetAllResponseDto> toUserListResponseDto(List<Corporation> corporations) {
        if ( corporations == null ) {
            return null;
        }

        List<CorporationGetAllResponseDto> list = new ArrayList<CorporationGetAllResponseDto>( corporations.size() );
        for ( Corporation corporation : corporations ) {
            list.add( corporationToCorporationGetAllResponseDto( corporation ) );
        }

        return list;
    }

    protected CorporationSummaryResponseDto corporationToCorporationSummaryResponseDto(Corporation corporation) {
        if ( corporation == null ) {
            return null;
        }

        CorporationSummaryResponseDto.CorporationSummaryResponseDtoBuilder corporationSummaryResponseDto = CorporationSummaryResponseDto.builder();

        corporationSummaryResponseDto.name( corporation.getName() );
        corporationSummaryResponseDto.id( corporation.getId() );
        corporationSummaryResponseDto.title( corporation.getTitle() );
        corporationSummaryResponseDto.email( corporation.getEmail() );
        corporationSummaryResponseDto.phone( corporation.getPhone() );
        corporationSummaryResponseDto.address( corporation.getAddress() );

        return corporationSummaryResponseDto.build();
    }

    protected CorporationGetAllResponseDto corporationToCorporationGetAllResponseDto(Corporation corporation) {
        if ( corporation == null ) {
            return null;
        }

        CorporationGetAllResponseDto.CorporationGetAllResponseDtoBuilder corporationGetAllResponseDto = CorporationGetAllResponseDto.builder();

        corporationGetAllResponseDto.name( corporation.getName() );
        List<String> list = corporation.getEmployeeMailList();
        if ( list != null ) {
            corporationGetAllResponseDto.employeeMailList( new ArrayList<String>( list ) );
        }
        corporationGetAllResponseDto.title( corporation.getTitle() );
        corporationGetAllResponseDto.mersisNo( corporation.getMersisNo() );
        corporationGetAllResponseDto.taxNo( corporation.getTaxNo() );
        corporationGetAllResponseDto.taxOffice( corporation.getTaxOffice() );
        corporationGetAllResponseDto.logo( corporation.getLogo() );
        corporationGetAllResponseDto.phone( corporation.getPhone() );
        corporationGetAllResponseDto.address( corporation.getAddress() );
        corporationGetAllResponseDto.email( corporation.getEmail() );
        corporationGetAllResponseDto.numberOfEmployees( corporation.getNumberOfEmployees() );
        corporationGetAllResponseDto.foundationYear( corporation.getFoundationYear() );
        corporationGetAllResponseDto.contractStart( corporation.getContractStart() );
        corporationGetAllResponseDto.contractEnd( corporation.getContractEnd() );
        corporationGetAllResponseDto.status( corporation.getStatus() );

        return corporationGetAllResponseDto.build();
    }
}
