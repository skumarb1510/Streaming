package com.capital.kafka;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class CustomMessage {
	private List<String> column_names;
	private List<List<String>> data;
	private String frequency;
	public List<String> getColumn_names() {
		return column_names;
	}
	public void setColumn_names(List<String> column_names) {
		this.column_names = column_names;
	}
	public List<List<String>> getData() {
		return data;
	}
	public void setData(List<List<String>> data) {
		this.data = data;
	}
	public String getFrequency() {
		return frequency;
	}
	public void setFrequency(String frequency) {
		this.frequency = frequency;
	}
	
	
}
