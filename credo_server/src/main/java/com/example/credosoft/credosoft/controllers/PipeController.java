package com.example.credosoft.credosoft.controllers;


import com.example.credosoft.credosoft.repositories.PipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/pipes")
public class PipeController {

    @Autowired
    PipeRepository pipeRepository;
}
