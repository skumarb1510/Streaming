package com.streaming.data.websocket.app;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class AppController {
    @MessageMapping("/streaming")
    @SendTo("/topic/streamingdata")
    public OutgoingMessage sendData(IncomingMessage message) throws Exception {
        Thread.sleep(1000); // simulated delay
        return new OutgoingMessage("Hello, " + message.getMessage() + "!");
    }

}
