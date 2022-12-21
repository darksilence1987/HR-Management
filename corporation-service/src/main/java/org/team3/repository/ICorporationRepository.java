package org.team3.repository;


import org.springframework.data.mongodb.repository.MongoRepository;
import org.team3.repository.entity.Corporation;

import java.util.Optional;

public interface ICorporationRepository extends MongoRepository<Corporation,String> {


    Optional<Corporation> findOptionalByEmail(String email);
}
