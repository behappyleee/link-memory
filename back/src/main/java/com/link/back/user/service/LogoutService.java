package com.link.back.user.service;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.websocket.SessionException;

import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.web.reactive.WebFluxProperties.Session;
import org.springframework.security.web.authentication.session.SessionAuthenticationException;
import org.springframework.stereotype.Service;

@Service
public class LogoutService {
	
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@SuppressWarnings("unchecked")
	public JSONObject userLogout(HttpServletRequest request) {
		logger.info("LogoutService userLogout Service");
		JSONObject result = new JSONObject();
		try {
			HttpSession session = request.getSession();
			String userEmail = (String)session.getAttribute("CURRENT_SESSION_USER_EMAIL");
			
			logger.info("USER EMAIL CHECK DATA : {} " , userEmail);
			
			if(userEmail.equals(null)  || userEmail.equals("") || userEmail.isBlank() || userEmail.isEmpty()) {
				result.put("LOGOUT_RESULT", "NONE_USER");
				return result;
			}
			session.invalidate();
			result.put("LOGOUT_RESULT", "SUCCESS");
		} catch(SessionAuthenticationException e) {
			e.printStackTrace();
		} catch(Exception e) {
			result.put("LOGOUT_RESULT", "FAIL");
			e.printStackTrace();
		}
		return result;
	}
	
	
	
}
