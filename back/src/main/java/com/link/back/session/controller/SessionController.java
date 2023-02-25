package com.link.back.session.controller;

import javax.servlet.http.HttpServletRequest;

import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.link.back.session.service.SessionService;

@RestController
@RequestMapping("/api")
public class SessionController {
	
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	SessionService sessionService;
	
	@RequestMapping("/existUserSession")
	public JSONObject existUserSession(HttpServletRequest request) {
		logger.info("SessionController existUserSession");
		JSONObject sessionResult = sessionService.existUserSession(request);
		
		
		logger.info("SESSION RESULT CHECK : {} ", sessionResult);
		
		
		return sessionResult;
	}
	
	
}
