package org.team3.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import org.team3.dto.request.CorporationCreateRequestDto;
import org.team3.dto.response.CorporationSummaryResponseDto;
import org.team3.exception.ErrorType;
import org.team3.exception.CorporationServiceException;
import org.team3.mapper.ICorporationMapper;
import org.team3.repository.ICorporationRepository;
import org.team3.repository.entity.Corporation;
import org.team3.utility.ServiceManager;

import java.util.List;


@Service
public class CorporationService extends ServiceManager<Corporation, String> {
    private final ICorporationRepository repository;

    public CorporationService(ICorporationRepository repository) {
        super(repository);
        this.repository = repository;
    }




    @Transactional
    public Corporation createCorporation(CorporationCreateRequestDto dto) {

        try {
            Corporation corporation= repository.insert(ICorporationMapper.INSTANCE.toCorporation(dto));
            return corporation;
        } catch (Exception e) {

            e.printStackTrace();
            throw new CorporationServiceException(ErrorType.CORPORATION_NOT_CREATED);
        }

    }


    public List<CorporationSummaryResponseDto> getAllCorporationsSummaryInfo(){
        return ICorporationMapper.INSTANCE.toUserListSummaryResponseDto(repository.findAll());
    }




}