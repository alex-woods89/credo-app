package com.example.credosoft.credosoft.repositories;

import com.example.credosoft.credosoft.models.Valve;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface ValveRepository extends JpaRepository<Valve, Long> {
}
