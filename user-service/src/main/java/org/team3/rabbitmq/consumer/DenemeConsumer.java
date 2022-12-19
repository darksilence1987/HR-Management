package org.team3.rabbitmq.consumer;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Service;
import org.team3.service.UserService;

@Service
@RequiredArgsConstructor
@Slf4j
public class DenemeConsumer {

    private final UserService userService;

    @RabbitListener(queues = "${rabbitmq.userUpdateQueue}")
    public void updateUser(String model) {
        log.info("User : {}", model.toString());
//        userService.updateAuth(model);
    }


}
