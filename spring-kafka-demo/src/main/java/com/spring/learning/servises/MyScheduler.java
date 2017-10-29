package com.spring.learning.servises;

import java.util.concurrent.ScheduledFuture;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.concurrent.ThreadPoolTaskScheduler;
import org.springframework.scheduling.support.CronTrigger;
import org.springframework.stereotype.Service;

@Service
public class MyScheduler {

@Autowired
ThreadPoolTaskScheduler tps;
ScheduledFuture sf;

CronTrigger trigger;

public void setDelay(String cronExpression) {
System.out.println("the trigger = " + cronExpression);
trigger = new CronTrigger(cronExpression);
}

@Autowired
MyTask task;

public void start(){
sf = tps.schedule(task, trigger);
}

public void changeTrigger(String cronExpression){
System.out.println("change trigger to: " + cronExpression);
sf.cancel(false);
trigger = new CronTrigger(cronExpression);
start();
}
}