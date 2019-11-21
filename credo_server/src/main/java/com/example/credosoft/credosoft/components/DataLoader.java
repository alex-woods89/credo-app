package com.example.credosoft.credosoft.components;

import com.example.credosoft.credosoft.models.Pipe;
import com.example.credosoft.credosoft.models.User;
import com.example.credosoft.credosoft.models.Valve;
import com.example.credosoft.credosoft.repositories.PipeRepository;
import com.example.credosoft.credosoft.repositories.UserRepository;
import com.example.credosoft.credosoft.repositories.ValveRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    PipeRepository pipeRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    ValveRepository valveRepository;

    public DataLoader(){}

    public void run(ApplicationArguments args){

        Pipe pipe1 = new Pipe("Pipe-01", "01-01-2019", "Site A", 123);
        pipeRepository.save(pipe1);

        Pipe pipe2 = new Pipe("Pipe-02", "02-02-2019", "Site B", 321);
        pipeRepository.save(pipe2);

        Pipe pipe3 = new Pipe("Pipe-03", "03-03-2019", "Site C", 231);
        pipeRepository.save(pipe3);


        User user1 = new User( "Joe", "Bloggs", "Chief Pipe Inspector", 1);
        userRepository.save(user1);

        User user2 = new User("Sarah", "Brown", "Chief Valve Inspector", 2);
        userRepository.save(user2);

        User user3 = new User("Kyle", "Donovan", "Junior Inspector", 3);
        userRepository.save(user3);

        Valve valve1 = new Valve("Valve-01", "01-01-2019", "Site A", 121);
        valveRepository.save(valve1);

        Valve valve2 = new Valve("Valve-02", "02-02-2019", "Site B", 122);
        valveRepository.save(valve2);

        Valve valve3 = new Valve("Valve-03", "03-03-2019", "Site C", 132);
        valveRepository.save(valve3);



    }



}
