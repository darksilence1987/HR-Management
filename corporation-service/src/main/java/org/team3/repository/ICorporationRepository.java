package org.team3.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.team3.repository.entity.Corporation;

public interface ICorporationRepository extends JpaRepository<Corporation,Long> {
}
