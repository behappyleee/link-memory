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
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.link.back.linkData.service.LinkDataService;

@RestController
@RequestMapping("/api")
public class LinkDataController {

	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	LinkDataService linkDataService;
	
	@SuppressWarnings("unchecked")
	@RequestMapping(value="/saveUserInputLink", method=RequestMethod.POST, consumes="multipart/form-data")
	public JSONObject saveUserInputLink(@RequestParam(value="test", required=true) String testJson, @RequestPart(value="uploadImage", required=false) MultipartFile multiFile) {
		logger.info("LinkDataController /api/saveUserInputLink testJson : {} ", testJson);
		logger.info("LinkDataController /api/saveUserInputLink : {} ", multiFile);
		
		JSONObject json = linkDataService.saveUserInputLink(testJson, multiFile);
		return json;
	}
	
	@SuppressWarnings("unchecked")
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
