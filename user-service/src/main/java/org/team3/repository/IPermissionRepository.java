package org.team3.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.team3.repository.entity.Permission;
import org.team3.repository.entity.User;
import org.team3.repository.enums.Status;

import java.util.List;
import java.util.Optional;

@Repository
public interface IPermissionRepository extends MongoRepository<Permission, String> {
    Optional<Permission> findOptionalByUserEmailAndStatus(String userEmail, Status status);
    Permission findByUserEmail(String userEmail);

    Optional<List<Permission>> findAllByCorporationName(String corporation);
}

