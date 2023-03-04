package com.link.back.user.controller;

import java.util.HashMap;

import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.link.back.user.service.FindPasswordService;

@RestController
@RequestMapping("/api")
public class FindPasswordController {

	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	FindPasswordService findPasswordService;
	
	// 회원 비밀번호 찾기
	@RequestMapping("/findPassword")
	public JSONObject findPassword(@RequestBody HashMap<String, Object> data) {
		logger.info("FindPasswordController /api/findPassword DATA : {} ", data);
		JSONObject resultJson = findPasswordService.findPassword(data);
		return resultJson;
	}
	
	
}
