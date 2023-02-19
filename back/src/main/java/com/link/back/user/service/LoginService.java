package com.link.back.user.service;

import java.util.HashMap;

import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.link.back.user.dao.LoginDao;

@Service
public class LoginService {

	Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	LoginDao loginDao;
	
	@Autowired
	PasswordEncoder passwordEncoder;
	
	public JSONObject userLogin(HashMap<String, Object> data) {
		logger.info("/userLogin LOGIN SERVICE DATA : {} ", data);
		JSONObject loginResult = new JSONObject();
		
		// User 가 존재하는 지 확인
		Integer userIndexId = getIndexUserId((String)data.get("userEmail"));
		logger.info("USER INDEX ID : " + userIndexId);
		
		if(userIndexId == null || userIndexId.equals(null) || userIndexId.equals("")) {
			loginResult.put("RESULT", "USER_NOT_EXIST");
			return loginResult;
		}
		
		// User 가 입력 한 비밀번호와 DB 에 저장된 Encoded 된 비밀번호와 Match
		String userEncodedPassword = getUserPassword(userIndexId);
		logger.info("USER LOGIN DATA CHECK MATCH : {} ", userEncodedPassword);
		
		if(!passwordEncoder.matches((String)data.get("userPassword"), userEncodedPassword)) {
			loginResult.put("RESULT", "USER_NOT_MATCH_PASSWORD");
			return loginResult;
		}
		
		loginResult.put("RESULT", "USER_LOGIN_SUCCESS");
		logger.info("LAST LOGIN RESULT JSON DATA CHECK : {} ", loginResult);
		return loginResult;
	}
	
	public Integer getIndexUserId(String userEmail) {
		return loginDao.userIndexId(userEmail);
	}
	
	public String getUserPassword(Integer userIndexId) {
		logger.debug("MATCH USER DATA MAP DATA CHECK : {} ", userIndexId);
		return loginDao.getUserPassword(userIndexId);	
	}
	
}
