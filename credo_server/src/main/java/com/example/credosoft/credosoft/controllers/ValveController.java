package com.example.credosoft.credosoft.controllers;


import com.example.credosoft.credosoft.repositories.ValveRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfigureOrder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/valves")
public class ValveController {

    @Autowired
    ValveRepository valveRepository;
}
