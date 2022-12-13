package org.team3.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.team3.repository.entity.UserAuth;

import java.util.Optional;

public interface IAuthRepository extends JpaRepository<UserAuth,Long> {
    Optional<UserAuth> findOptionalByEmailAndPassword(String email, String password);


}

