package org.team3.repository;

import org.team3.repository.entity.LoginDetails;
import org.springframework.data.jpa.repository.JpaRepository;
public interface IAuthRepository extends JpaRepository<LoginDetails,Long> {


}

