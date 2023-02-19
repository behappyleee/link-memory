package com.link.back.linkData.controller;

import java.util.Enumeration;
import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.link.back.linkData.service.LinkDataService;

@RestController
@RequestMapping("/api")
public class LinkDataController {

	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	LinkDataService linkDataService;
	
	@RequestMapping("/userSavedLinkData") 
	public JSONObject userSavedLinkData(HttpServletRequest request, @RequestParam HashMap<String, Object> data) {	
		logger.info("LinkDataController /api/userSavedLinkData : {} ", data);
		
		HttpSession session = request.getSession();
		Enumeration <String> sessionNames = session.getAttributeNames();
		while(sessionNames.hasMoreElements()) {
			String key = sessionNames.nextElement();
			logger.info("SESSION KEY : {} , VALUE : {} ", key, session.getValue(key));
		}
		
		
		JSONObject jsonResult = linkDataService.userSavedLinkData(request, data);
		
		
		return jsonResult;
	}
	
}
