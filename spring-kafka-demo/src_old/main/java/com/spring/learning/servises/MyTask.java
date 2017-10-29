package com.spring.learning.servises;

import org.springframework.stereotype.Service;

@Service
public class MyTask implements Runnable{


public void run() {
System.out.println("MyTask runnable");
}
}