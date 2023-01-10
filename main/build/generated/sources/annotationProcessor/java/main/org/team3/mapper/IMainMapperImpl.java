package org.team3.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import org.team3.dto.request.AuthRegisterRequestDto;
import org.team3.dto.request.UserDetailsRequestDto;
import org.team3.dto.request.UserUpdateInfoFromManagerRequestDto;
import org.team3.dto.request.UserUpdateInfoFromUserRequestDto;
import org.team3.dto.response.UserDetailsResponseDto;
import org.team3.dto.response.UserSummaryResponseDto;
import org.team3.repository.entity.UserProfile;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-01-10T01:59:17+0300",
    comments = "version: 1.5.2.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.5.1.jar, environment: Java 17.0.4.1 (Amazon.com Inc.)"
)
@Component
public class IMainMapperImpl implements IMainMapper {

    @Override
    public UserProfile toUserProfile(UserDetailsResponseDto dto) {
        if ( dto == null ) {
            return null;
        }

        UserProfile.UserProfileBuilder userProfile = UserProfile.builder();

        userProfile.email( dto.getEmail() );
        userProfile.photo( dto.getPhoto() );
        userProfile.name( dto.getName() );
        userProfile.surname( dto.getSurname() );
        userProfile.secondName( dto.getSecondName() );
        userProfile.secondSurname( dto.getSecondSurname() );
        userProfile.birthDate( dto.getBirthDate() );
        userProfile.birthPlace( dto.getBirthPlace() );
        userProfile.startDate( dto.getStartDate() );
        userProfile.job( dto.getJob() );
        userProfile.department( dto.getDepartment() );
        userProfile.phone( dto.getPhone() );
        userProfile.address( dto.getAddress() );
        userProfile.role( dto.getRole() );
        userProfile.corporationName( dto.getCorporationName() );

        return userProfile.build();
    }

    @Override
    public List<UserProfile> toUserProfileList(List<UserSummaryResponseDto> dtoList) {
        if ( dtoList == null ) {
            return null;
        }

        List<UserProfile> list = new ArrayList<UserProfile>( dtoList.size() );
        for ( UserSummaryResponseDto userSummaryResponseDto : dtoList ) {
            list.add( userSummaryResponseDtoToUserProfile( userSummaryResponseDto ) );
        }

        return list;
    }

    @Override
    public UserUpdateInfoFromManagerRequestDto toUserUpdateInfoFromManagerRequestDto(UserProfile userProfile) {
        if ( userProfile == null ) {
            return null;
        }

        UserUpdateInfoFromManagerRequestDto.UserUpdateInfoFromManagerRequestDtoBuilder userUpdateInfoFromManagerRequestDto = UserUpdateInfoFromManagerRequestDto.builder();

        userUpdateInfoFromManagerRequestDto.photo( userProfile.getPhoto() );
        userUpdateInfoFromManagerRequestDto.name( userProfile.getName() );
        userUpdateInfoFromManagerRequestDto.surname( userProfile.getSurname() );
        userUpdateInfoFromManagerRequestDto.secondName( userProfile.getSecondName() );
        userUpdateInfoFromManagerRequestDto.secondSurname( userProfile.getSecondSurname() );
        userUpdateInfoFromManagerRequestDto.birthDate( userProfile.getBirthDate() );
        userUpdateInfoFromManagerRequestDto.birthPlace( userProfile.getBirthPlace() );
        userUpdateInfoFromManagerRequestDto.startDate( userProfile.getStartDate() );
        userUpdateInfoFromManagerRequestDto.job( userProfile.getJob() );
        userUpdateInfoFromManagerRequestDto.department( userProfile.getDepartment() );
        userUpdateInfoFromManagerRequestDto.email( userProfile.getEmail() );
        userUpdateInfoFromManagerRequestDto.phone( userProfile.getPhone() );
        userUpdateInfoFromManagerRequestDto.address( userProfile.getAddress() );
        userUpdateInfoFromManagerRequestDto.role( userProfile.getRole() );

        return userUpdateInfoFromManagerRequestDto.build();
    }

    @Override
    public UserUpdateInfoFromUserRequestDto toUserUpdateInfoFromUserRequestDto(UserProfile userProfile) {
        if ( userProfile == null ) {
            return null;
        }

        UserUpdateInfoFromUserRequestDto.UserUpdateInfoFromUserRequestDtoBuilder userUpdateInfoFromUserRequestDto = UserUpdateInfoFromUserRequestDto.builder();

        userUpdateInfoFromUserRequestDto.photo( userProfile.getPhoto() );
        userUpdateInfoFromUserRequestDto.address( userProfile.getAddress() );
        userUpdateInfoFromUserRequestDto.phone( userProfile.getPhone() );

        return userUpdateInfoFromUserRequestDto.build();
    }

    @Override
    public AuthRegisterRequestDto toAuthRegisterRequestDto(UserDetailsRequestDto dto) {
        if ( dto == null ) {
            return null;
        }

        AuthRegisterRequestDto.AuthRegisterRequestDtoBuilder authRegisterRequestDto = AuthRegisterRequestDto.builder();

        authRegisterRequestDto.email( dto.getEmail() );

        return authRegisterRequestDto.build();
    }

    protected UserProfile userSummaryResponseDtoToUserProfile(UserSummaryResponseDto userSummaryResponseDto) {
        if ( userSummaryResponseDto == null ) {
            return null;
        }

        UserProfile.UserProfileBuilder userProfile = UserProfile.builder();

        userProfile.email( userSummaryResponseDto.getEmail() );
        userProfile.photo( userSummaryResponseDto.getPhoto() );
        userProfile.job( userSummaryResponseDto.getJob() );
        userProfile.department( userSummaryResponseDto.getDepartment() );
        userProfile.phone( userSummaryResponseDto.getPhone() );
        userProfile.address( userSummaryResponseDto.getAddress() );

        return userProfile.build();
    }
}
