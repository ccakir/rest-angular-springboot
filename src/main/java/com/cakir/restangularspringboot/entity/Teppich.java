package com.cakir.restangularspringboot.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.math.BigDecimal;
import java.util.Date;

@Entity
public class Teppich {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String beschreibung;
    private String abmessung;
    private int piece;
    private BigDecimal preis;
    private Date date;

    public Teppich() {
    }

    public Teppich(Long id, String beschreibung, String abmessung, int piece, BigDecimal preis, Date date) {
        this.id = id;
        this.beschreibung = beschreibung;
        this.abmessung = abmessung;
        this.piece = piece;
        this.preis = preis;
        this.date = date;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBeschreibung() {
        return beschreibung;
    }

    public void setBeschreibung(String beschreibung) {
        this.beschreibung = beschreibung;
    }

    public String getAbmessung() {
        return abmessung;
    }

    public void setAbmessung(String abmessung) {
        this.abmessung = abmessung;
    }

    public int getPiece() {
        return piece;
    }

    public void setPiece(int piece) {
        this.piece = piece;
    }

    public BigDecimal getPreis() {
        return preis;
    }

    public void setPreis(BigDecimal preis) {
        this.preis = preis;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
