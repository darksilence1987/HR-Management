package org.team3.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.team3.repository.entity.UserAuth;

import java.util.Optional;
@Repository
public interface IAuthRepository extends JpaRepository<UserAuth,Long> {
    Optional<UserAuth> findOptionalByEmailAndPassword(String email, String password);


}

