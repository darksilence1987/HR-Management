package org.team3.repository;

import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.stereotype.Repository;
import org.team3.repository.entity.User;
@Repository
public interface IUserRepository extends ElasticsearchRepository<User, String> {
}

