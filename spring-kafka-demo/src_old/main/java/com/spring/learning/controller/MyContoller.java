package com.spring.learning.controller;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;



import com.spring.learning.servises.MyScheduler;

@Controller
public class MyContoller {
	
	@Autowired
	ServletContext context; 
	@Autowired
	ApplicationContext appcontex;
	@Autowired
	private MyScheduler myScheduler;
	 
	
	private String a = "qwer";
	
	public MyContoller(){
		System.out.println(this.a);
	}
	
	@RequestMapping(value="/", method = RequestMethod.GET)
	public String Showpage(){
		//model.addAttribute("demostring", "Its a demo!!!");
		//myScheduler = (MyScheduler) appcontex.getBean("myscheduler");
		//myScheduler.setDelay("*/5 * * * * *");
		//myScheduler.start();
		return "Test";
	}
	
	
	

}
