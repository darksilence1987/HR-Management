package org.team3.service;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import org.team3.repository.IMainRepository;
import org.team3.repository.entity.Main;
import org.team3.utility.ServiceManager;
@Service
public class MainService  extends ServiceManager<Main, Long> {
    private final IMainRepository iMainRepository;


    public MainService(IMainRepository iMainRepository) {
        super(iMainRepository);
        this.iMainRepository=iMainRepository;
    }
}
