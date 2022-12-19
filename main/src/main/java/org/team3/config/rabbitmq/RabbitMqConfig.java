package org.team3.config.rabbitmq;


import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.DirectExchange;
import org.springframework.amqp.core.Queue;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

// @Configuration
public class RabbitMqConfig {

    @Value("${rabbitmq.exchange-main}")
    private String exchange;
    @Value("${rabbitmq.bindingKey}")
    private String bindingKeyActivatedCode;
    @Value("${rabbitmq.queueActivatedCode}")
    private String queueNameActivatedCode;

    @Bean
    DirectExchange exchangeMain() {
        return new DirectExchange(exchange);
    }

    @Bean
    Queue activatedCodeQueue() {

        return new Queue(queueNameActivatedCode);
    }

    @Bean
    public Binding bindingActivatedCode(final Queue activatedCodeQueue, final DirectExchange exchangeMain) {

        return BindingBuilder.bind(activatedCodeQueue).to(exchangeMain).with(bindingKeyActivatedCode);


    }

}
