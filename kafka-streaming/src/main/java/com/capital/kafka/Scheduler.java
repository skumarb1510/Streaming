package com.capital.kafka;

import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.PostConstruct;

@Component
public class Scheduler {
	RestTemplate restTempl = new RestTemplate();
	
	@PostConstruct
	public void init() {
		String json  = restTempl.getForObject("https://www.quandl.com/api/v3/datasets/WIKI/JNJ/data.json?start_date=2011-01-01&end_date=2017-10-25&api_key=MB9f57JsRrAefDf2ZMhD&rows=2",String.class);
		Map<String,String> map = new HashMap<String,String>();
		ObjectMapper mapper = new ObjectMapper();
		try {
			HashMap<String,CustomMessage> resmap = mapper.readValue(json, new TypeReference<HashMap<String,CustomMessage>>(){});
			for(Map.Entry<String, CustomMessage> entry:resmap.entrySet()) {
				System.out.println(entry.getValue().getData().size());
			}
		}catch(Exception e) {e.printStackTrace();}
	}
	
	@Scheduled(fixedDelay=3000)
	public void test() {
		System.out.println("tset");
	}
}
