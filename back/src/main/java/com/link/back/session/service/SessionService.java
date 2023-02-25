package com.link.back.session.service;


import java.util.Enumeration;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class SessionService {
	
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	public JSONObject existUserSession(HttpServletRequest request) {
		JSONObject sessionResult = new JSONObject();
		HttpSession currentSession = request.getSession();
		String currentUserEmail = (String)currentSession.getAttribute("CURRENT_SESSION_USER_EMAIL");
		if(currentUserEmail == null || currentUserEmail.equals("") || currentUserEmail.isBlank() || currentUserEmail.isEmpty()) {
			sessionResult.put("EXIST_SESSION_RESULT", "NONE");
			return sessionResult;
		}
		sessionResult.put("EXIST_SESSION_RESULT", "EXISTS");
		return sessionResult;
	}
	
	
	
}
