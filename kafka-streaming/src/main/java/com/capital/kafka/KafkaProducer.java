package com.capital.kafka;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;

public class KafkaProducer {
	  @Autowired
	  private KafkaTemplate<String, CustomMessage> kafkaTemplate;

	  public void send(String topic, CustomMessage payload) {	    
	    kafkaTemplate.send(topic, payload);
	  }
}
