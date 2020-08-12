package com.cakir.restangularspringboot.services;

import com.cakir.restangularspringboot.entity.Teppich;
import com.cakir.restangularspringboot.exception.ResourceNotFoundException;
import com.cakir.restangularspringboot.repository.TeppichRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeppichServiceImpl implements TeppichService {

    private final TeppichRepository teppichRepository;

    public TeppichServiceImpl(TeppichRepository teppichRepository) {
        this.teppichRepository = teppichRepository;
    }

    @Override
    public Teppich save(Teppich object) {
        return (Teppich) teppichRepository.save(object);
    }

    @Override
    public List<Teppich> findAll() {
        return (List<Teppich>) teppichRepository.findAll();
    }

    @Override
    public void deleteById(Long id) {

        teppichRepository.deleteById(id);

    }

    @Override
    public Teppich findById(Long id) throws ResourceNotFoundException {
        return (Teppich) teppichRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Teppich für diese ID nicht gefunden : " + id)) ;
    }

    @Override
    public void delete(Teppich object) {

        teppichRepository.delete(object);
    }
}
