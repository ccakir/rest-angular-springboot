package com.cakir.restangularspringboot.services;

import com.cakir.restangularspringboot.exception.ResourceNotFoundException;

import java.util.List;

public interface CrudService<T, ID> {

    T save(T object);

    List<T> findAll();

    void deleteById(ID id);

    T findById(ID id) throws ResourceNotFoundException;

    void delete(T object);

}
