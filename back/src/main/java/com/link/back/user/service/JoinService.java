package com.link.back.user.service;

import java.util.HashMap;

import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.link.back.user.dao.JoinDao;
import com.link.back.user.dto.UserDto;

@Service
public class JoinService {

	Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	JoinDao joinDao;
	
	public JSONObject userJoin(HashMap<String, Object> data) {
		logger.info("JOIN SERVICE USER JOIN DATA : {} ", data);
		JSONObject jsonResult = new JSONObject();
		try {
			String userInputEmail = (String) data.get("email");
			boolean isExistUser = isAlereayExistUserEmail(userInputEmail);
			if(isExistUser) {
				jsonResult.put("RESULT", "USER_EXIST");			
				return jsonResult;
			}
			UserDto userDto = new UserDto();
			userDto.setUserEmail((String) data.get("email"));
			userDto.setUserPassword(passwordEncoder.encode((String)data.get("password")));
			userDto.setFirstName((String) data.get("firstName"));
			userDto.setLastName((String) data.get("lastName"));
			
			joinDao.saveJoinUseData(userDto);
			jsonResult.put("RESULT", "JOIN_SUCEESS");
		} catch(Exception e) {
			jsonResult.put("RESULT", "JOIN_FAIL");
			e.printStackTrace();
		}
		return jsonResult;
	}
	
	public boolean isAlereayExistUserEmail(String inputUserEmail) {
		boolean isExist = false;
		int userEmailCount = joinDao.countUserEamil(inputUserEmail);
		isExist = (userEmailCount > 0) ? true : false ;
		return isExist;
	}

	
	
}
