package org.team3.rabbitmq.consumer;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Service;
import org.team3.rabbitmq.model.UpdateUsernameEmailModel;
import org.team3.service.AuthService;

@Service
@RequiredArgsConstructor
@Slf4j
public class UpdateUserConsumer {

    private final AuthService authService;

    @RabbitListener(queues = "${rabbitmq.userUpdateQueue}")
    public void updateUser(UpdateUsernameEmailModel model) {
        log.info("User : {}", model.toString());
        authService.updateAuth(model);
    }


}
