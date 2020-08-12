package com.cakir.restangularspringboot.controller;

import com.cakir.restangularspringboot.entity.Teppich;
import com.cakir.restangularspringboot.exception.ResourceNotFoundException;
import com.cakir.restangularspringboot.services.TeppichService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("api/v1")
public class TeppichController {

    private final TeppichService teppichService;

    public TeppichController(TeppichService teppichService) {
        this.teppichService = teppichService;
    }

    @GetMapping("/teppiche")
    public List<Teppich> findAll() {
        return teppichService.findAll();
    }

    @GetMapping("/teppiche/{id}")
    public ResponseEntity<Teppich> getTeppichById(@PathVariable(value = "id") Long id) throws ResourceNotFoundException {
        Teppich teppich = teppichService.findById(id);
        return ResponseEntity.ok().body(teppich);
    }

    @PostMapping("/teppiche")
    public Teppich createTeppich(@Valid @RequestBody Teppich teppich) {
        return  teppichService.save(teppich);
    }

    @PutMapping("/teppiche/{id}")
    public ResponseEntity<Teppich> updateTeppich(@PathVariable(value = "id") Long id,
                                                 @Valid @RequestBody Teppich teppichDetails) throws ResourceNotFoundException {
        Teppich teppich = teppichService.findById(id);
        Teppich updatedTeppich = teppichService.save(teppichDetails);
        return ResponseEntity.ok(updatedTeppich);
    }

    @DeleteMapping("/teppiche/{id}")
    public Map<String, Boolean> deleteTeppich(@PathVariable(value = "id") Long id) throws ResourceNotFoundException {

        Teppich teppich = teppichService.findById(id);
        teppichService.delete(teppich);
        Map<String, Boolean> response = new HashMap<>();
        response.put("gelöscht", Boolean.TRUE);
        return response;

    }

}
