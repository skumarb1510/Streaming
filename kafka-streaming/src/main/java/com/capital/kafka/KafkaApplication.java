package com.capital.kafka;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class KafkaApplication {
	@Autowired
	private Scheduler scheduler;

	public static void main(String[] args) {
		SpringApplication.run(KafkaApplication.class, args);
	}
	
	@PostConstruct
	public void init() {/*scheduler.init();*/}
}
