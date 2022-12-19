package org.team3.repository;


import org.springframework.data.mongodb.repository.MongoRepository;
import org.team3.repository.entity.Corporation;

public interface ICorporationRepository extends MongoRepository<Corporation,String> {





}
