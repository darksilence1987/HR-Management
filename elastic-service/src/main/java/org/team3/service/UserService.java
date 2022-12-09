package org.team3.service;

import org.springframework.stereotype.Service;
import org.team3.repository.IUserRepository;
import org.team3.repository.entity.User;
import org.team3.utility.ServiceManager;

@Service
public class UserService extends ServiceManager<User, String> {

    private final IUserRepository iUserRepository;
    public UserService(IUserRepository repository, IUserRepository iUserRepository) {
        super(repository);
        this.iUserRepository = iUserRepository;
    }
}

