package org.team3.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import org.mapstruct.factory.Mappers;
@Mapper(componentModel = "spring",unmappedTargetPolicy = ReportingPolicy.IGNORE)
public class IMainMapper {


        IMainMapper INSTANCE= Mappers.getMapper(IMainMapper.class);




}
