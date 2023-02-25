package com.link.back.user.controller;


import javax.servlet.http.HttpServletRequest;

import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.link.back.user.service.LogoutService;

@RestController
@RequestMapping("/api")
public class LogoutController {

	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	LogoutService logoutService;
	
	@RequestMapping("/logout")
	public JSONObject userLogout(HttpServletRequest request) {
		logger.info("Logout Controller USER LOGOUT");
		
		JSONObject logoutResult = logoutService.userLogout(request);
		
		return logoutResult;
	}
	
	
}
