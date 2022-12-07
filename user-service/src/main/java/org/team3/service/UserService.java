package org.team3.service;

import org.team3.repository.IUserRepository;
import org.team3.repository.entity.User;
import org.team3.utility.ServiceManager;

public class UserService extends ServiceManager<User, String> {
    public UserService(IUserRepository repository) {
        super(repository);
    }
}
