package org.team3.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.team3.repository.entity.User;

import java.util.Optional;

@Repository
public interface IUserRepository extends MongoRepository<User, String> {
    Optional<User> findByEmail(String email);
}

