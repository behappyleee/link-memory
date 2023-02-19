package com.link.back.user.controller;

import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;

import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.link.back.user.service.LoginService;

@RestController
@RequestMapping("/api")
public class LoginController {
	
	Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	LoginService loginService;
	
	@GetMapping("/userLogin")
	public JSONObject userLogin(HttpServletRequest request, @RequestParam HashMap<String, Object> data) {
		logger.info("/userLogin PARAMS DATA :{} ", data);
		
		JSONObject loginResult = loginService.userLogin(request, data);
		
		logger.info("USER LOGIN RESULT DATA :{} ", loginResult);
		return loginResult;
	}
	
	
}
