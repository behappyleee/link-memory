package com.link.back.user.service;

import java.util.HashMap;

import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.link.back.user.dao.JoinDao;

@Service
public class JoinService {

	Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	JoinDao joinDao;
	
	public JSONObject userJoin(HashMap<String, Object> data) {
		logger.info("JOIN SERVICE USER JOIN DATA : {} ", data);
		
		JSONObject jsonTest = new JSONObject();
		
		int countUser = joinDao.countUserEamil("test");
		
		logger.info("USER COUNT DATA : {} ", countUser);
		
		// 존재 하는 회원인 지 확인
		// passwordEncoder.encode(null);
		
		// 회원 가입 validation 처리 하여 주기
		jsonTest.put("RESULT_CONNECT", "SUCCESS");
		
		return jsonTest;
	}
	
	public boolean isAlereayExistUserEmail(String inputUserEmail) {
		boolean isExist = false;
		
		
		return isExist;
	}

	
	
}
