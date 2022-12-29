package org.team3.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.team3.repository.entity.User;
import org.team3.repository.enums.Role;

import java.util.List;
import java.util.Optional;

@Repository
public interface IUserRepository extends MongoRepository<User, String> {
    Optional<User> findOptionalByEmail(String email);
    List<User> findAllByRole(String role);

}

