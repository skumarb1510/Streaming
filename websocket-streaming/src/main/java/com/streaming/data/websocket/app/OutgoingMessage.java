package com.streaming.data.websocket.app;

public class OutgoingMessage {
	private String content;	
	public OutgoingMessage() {}
	public OutgoingMessage(String msg) {this.content = msg;}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	
}
