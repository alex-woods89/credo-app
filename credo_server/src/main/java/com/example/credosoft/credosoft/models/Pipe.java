package com.example.credosoft.credosoft.models;


import javax.persistence.*;

@Entity
@Table(name = "pipes")
public class Pipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "last_inspection")
    private String lastInspectionDate;

    @Column(name = "location")
    private String location;

    @Column(name = "unique_pipe_id")
    private int uniquePipeId;


    public Pipe(String name, String lastInspectionDate, String location, int uniquePipeId){
        this.name = name;
        this.lastInspectionDate = lastInspectionDate;
        this.location = location;
        this.uniquePipeId = uniquePipeId;
    }

    public Pipe(){}

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

    public int getUniquePipeId() {
        return uniquePipeId;
    }

    public void setUniquePipeId(int uniquePipeId) {
        this.uniquePipeId = uniquePipeId;
    }
}
