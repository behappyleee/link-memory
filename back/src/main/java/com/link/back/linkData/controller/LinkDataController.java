package com.link.back.linkData.controller;

import java.util.ArrayList;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;

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
	public JSONObject saveUserInputLink(HttpServletRequest request, @RequestParam HashMap<String, Object> data, 
			@RequestPart(value="uploadImage", required=false) MultipartFile multiFile) {
		logger.info("LinkDataController /api/saveUserInputLink testJson : {} ", data);
		logger.info("LinkDataController /api/saveUserInputLink : {} ", multiFile);
		 
		JSONObject json = linkDataService.saveUserInputLink(request, data, multiFile);
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
	
	public static void main(String[] args) {
		
		HashMap<String, Object> testMap = new HashMap<>();
		
		System.out.println("TEST MAP HASH 1 : " + testMap.toString());
		System.out.println("TEST MAP HASH 2 : " + testMap.toString());
		
		Object aaa = new Object();
		System.out.println("AAA TO STRING 1 : " + aaa.toString());
		System.out.println("AAA TO STRING 2 : " + aaa.toString());
		
		
		LinkedList<String> linkTest = new LinkedList<>();
		List<String> arList = new ArrayList<>();
		
		
		
	}
	
	
	
}
