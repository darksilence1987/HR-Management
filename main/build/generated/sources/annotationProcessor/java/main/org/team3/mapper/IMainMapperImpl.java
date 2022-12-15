package org.team3.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import org.team3.dto.response.UserDetailsResponseDto;
import org.team3.dto.response.UserSummaryResponseDto;
import org.team3.repository.entity.UserProfile;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-12-15T15:27:08+0300",
    comments = "version: 1.5.2.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.5.1.jar, environment: Java 17.0.5 (JetBrains s.r.o.)"
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
