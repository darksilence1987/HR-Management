package org.team3.rabbitmq.producer;


import lombok.RequiredArgsConstructor;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DenemeProcedure {

    @Value("${rabbitmq.exchange-auth}")
    private String exchange;
    @Value("${rabbitmq.bindingKey}")
    private String bindingKeyActivatedCode;



    private final RabbitTemplate rabbitTemplate;


        public void sendActivatedCode(String message) {

        rabbitTemplate.convertAndSend(exchange, bindingKeyActivatedCode, message);
    }

    // model icindeki ActivateRequestDto dto

//    public void sendActivatedCode(ActivateReguestDto dto) {
//
//        rabbitTemplate.convertAndSend(exchange, bindingKeyActivatedCode, dto);
//    }

}
