package com.example.credosoft.credosoft.models;


import javax.persistence.*;

@Entity
@Table(name = "valves")
public class Valve {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name= "name")
    private String name;

    @Column(name = "last_inspection")
    private String lastInspectionDate;

    @Column(name = "location")
    private String location;

    @Column(name = "unique_valve_id")
    private int uniqueValveId;

    public Valve(String name, String lastInspectionDate, String location, int uniqueValveId) {
        this.name = name;
        this.lastInspectionDate = lastInspectionDate;
        this.location = location;
        this.uniqueValveId = uniqueValveId;
    }

    public Valve(){}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastInspectionDate() {
        return lastInspectionDate;
    }

    public void setLastInspectionDate(String lastInspectionDate) {
        this.lastInspectionDate = lastInspectionDate;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public int getUniqueValveId() {
        return uniqueValveId;
    }

    public void setUniqueValveId(int uniqueValveId) {
        this.uniqueValveId = uniqueValveId;
    }
}
