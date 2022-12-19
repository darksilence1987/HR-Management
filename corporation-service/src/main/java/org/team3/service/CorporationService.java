package org.team3.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import org.team3.exception.ErrorType;
import org.team3.exception.CorporationServiceException;

import java.util.List;
import java.util.Optional;

//@Service
//public class CorporationService extends ServiceManager<Corporation, String> {
//    private final ICorporationRepository repository;
//
//    public CorporationService(ICorporationRepository repository) {
//        super(repository);
//        this.repository = repository;
//    }

//    @Transactional
//    public User createUser(UserDetailsRequestDto dto) {
//
//        try {
//            User user= repository.insert(IUserMapper.INSTANCE.toUser(dto));
//            return user;
//        } catch (Exception e) {
//
//            e.printStackTrace();
//            throw new CorporationServiceException(ErrorType.USER_NOT_CREATED);
//        }
//
//    }

//    @Transactional
//    public UserDetailsResponseDto userDetailsResponseByEmail(String email) {
//
//        try {
//            Optional<User> user= repository.findOptionalByEmail(email);
//            UserDetailsResponseDto dto = IUserMapper.INSTANCE.toUserDetailsResponseDto(user.get());
//            return dto;
//        } catch (Exception e) {
//
//            e.printStackTrace();
//            throw new CorporationServiceException(ErrorType.USER_NOT_CREATED);
//        }
//
//    }

//
//    public boolean updateUserFromManager(UserUpdateInfoFromManagerRequestDto dto, String email) {
//
//        Optional<User> userProfileDb = repository.findOptionalByEmail(email);
//        if (userProfileDb.isPresent()) {
//            userProfileDb.get().setAddress(dto.getAddress());
//            userProfileDb.get().setPhone(dto.getPhone());
//            userProfileDb.get().setPhoto(dto.getPhoto());
//            userProfileDb.get().setRole(dto.getRole());
//            userProfileDb.get().setName(dto.getName());
//            userProfileDb.get().setBirthPlace(dto.getBirthPlace());
//            userProfileDb.get().setSurname(dto.getSurname());
//            userProfileDb.get().setSecondName(dto.getSecondName());
//            userProfileDb.get().setBirthDate(dto.getBirthDate());
//            userProfileDb.get().setStartDate(dto.getStartDate());
//            userProfileDb.get().setJob(dto.getJob());
//            userProfileDb.get().setDepartment(dto.getDepartment());
//            userProfileDb.get().setEmail(dto.getEmail());
//            userProfileDb.get().setSurname(dto.getSecondSurname());
//            save(userProfileDb.get());
//            return true;
//        } else {
//            throw new CorporationServiceException(ErrorType.USER_NOT_FOUND);
//        }
//    }
//
//    public List<UserSummaryResponseDto> getAllUsersSummaryInfo(){
//        return IUserMapper.INSTANCE.toUserListSummaryResponseDto(repository.findAll());
//    }




//}

