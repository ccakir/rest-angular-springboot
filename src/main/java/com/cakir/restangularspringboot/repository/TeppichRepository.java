package com.cakir.restangularspringboot.repository;

import com.cakir.restangularspringboot.entity.Teppich;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeppichRepository extends CrudRepository<Teppich, Long> {
}
