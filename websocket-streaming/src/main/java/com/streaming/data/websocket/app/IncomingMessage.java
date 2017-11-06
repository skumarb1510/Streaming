package com.streaming.data.websocket.app;

public class IncomingMessage {
	private String message;	
	public IncomingMessage() {}
	public IncomingMessage(String msg) {this.message = msg;}
	public String getMessage() {return message;}
	public void setMessage(String message) {this.message = message;}
}
