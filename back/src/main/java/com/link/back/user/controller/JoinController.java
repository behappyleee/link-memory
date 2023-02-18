package com.link.back.user.controller;

import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;

import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.link.back.user.service.JoinService;

@RestController
@RequestMapping("/api")
public class JoinController {

	Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	JoinService joinService;
	
	@PostMapping("userJoin")
	public JSONObject userJoin(HttpServletRequest req, @RequestBody HashMap<String, Object> data) {
		logger.info("JoinController /api/userJoin data : {} ", data);
		
		JSONObject jsonTest = joinService.userJoin(data);
		JSONObject resultJson = joinService.userJoin(data);
		
		
		logger.info("BEFORE RETURN MODEL JSONTESSSTT : {} " , jsonTest);
		
		return jsonTest;
	}
	
	@GetMapping("/getTest")
	public String testGet() {
		logger.info("GET TEST CHECK");
		
		return "Hello World";
	}
	
	
}
