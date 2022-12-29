package org.team3.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import org.team3.dto.request.CorporationCreateRequestDto;
import org.team3.dto.request.CorporationUpdateRequestDto;
import org.team3.dto.response.CorporationGetAllResponseDto;
import org.team3.dto.response.CorporationSummaryResponseDto;
import org.team3.exception.ErrorType;
import org.team3.exception.CorporationServiceException;
import org.team3.mapper.ICorporationMapper;
import org.team3.repository.ICorporationRepository;
import org.team3.repository.entity.Corporation;
import org.team3.utility.ServiceManager;

import java.util.List;
import java.util.Optional;


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


    public List<CorporationGetAllResponseDto> getAllCorporations() {
        return ICorporationMapper.INSTANCE.toUserListResponseDto(repository.findAll());
    }

    public Boolean updateCorporation(CorporationUpdateRequestDto dto) {

        Optional<Corporation> corporationDb = repository.findOptionalByEmail(dto.getEmail());

        if (corporationDb.isPresent()) {
            corporationDb.get().setName(dto.getName());
            corporationDb.get().setTitle(dto.getTitle());
            corporationDb.get().setMersisNo(dto.getMersisNo());
            corporationDb.get().setTaxNo(dto.getTaxNo());
            corporationDb.get().setTaxOffice(dto.getTaxOffice());
            corporationDb.get().setLogo(dto.getLogo());
            corporationDb.get().setPhone(dto.getPhone());
            corporationDb.get().setAddress(dto.getAddress());
            corporationDb.get().setEmail(dto.getEmail());
            corporationDb.get().setNumberOfEmployees(dto.getNumberOfEmployees());
            corporationDb.get().setContractStart(dto.getContractStart());
            corporationDb.get().setContractEnd(dto.getContractEnd());
            corporationDb.get().setStatus(dto.getStatus());
            save(corporationDb.get());
            return true;

        } else {

            throw new CorporationServiceException(ErrorType.CORPORATION_NOT_FOUND);

        }
    }

    public void addEmployee(String email, String companyId){
        Corporation corporation = repository.findById(companyId).get();
        corporation.addEmployee(email);
    }







}