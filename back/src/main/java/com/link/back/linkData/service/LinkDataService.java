package com.link.back.linkData.service;

import java.util.HashMap;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.link.back.linkData.dao.LinkDataDao;

@Service
public class LinkDataService {
	
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	LinkDataDao linkDataDao;
	
	public JSONObject userSavedLinkData(HttpServletRequest request, HashMap<String, Object> data) {
		JSONObject jsonData = new JSONObject();
		
		HttpSession session = request.getSession();
		data.put("userEmail", session.getAttribute("CURRENT_SESSION_USER_EMAIL"));
		
		JSONArray jsonArray = new JSONArray();
		List<HashMap<String,Object>> userSavedLinkList = linkDataDao.userSavedLinkData(data);
		
		
		logger.info("TEST USE SAVE LINK DATA : {} ", userSavedLinkList);		
		
		for(int i=0; i<userSavedLinkList.size(); i++) {
			HashMap<String, Object> linkData = userSavedLinkList.get(i);	
			jsonArray.add(linkData);
		}
		
		jsonData.put("USER_LINK_DATA", sortListByLink(jsonArray));
		jsonData.put("DATA_SEARCH", "SUCCESS");
		
		return jsonData;
	}
	
	// TODO Json 데이터 Comment 순서에 따라 제대로 만들어 주기 !!!!
	public JSONObject sortListByLink(List<HashMap<String,Object>> linkList) {
		logger.info("JSONArrayData : {} ", linkList);
		JSONObject jsonObject = new JSONObject();
		
		if(linkList.isEmpty()) return jsonObject;
		
		HashMap<String, Object> linkMap = new HashMap<String, Object>();
		
		for(int i=0; i<linkList.size(); i++) {
			if(jsonObject.containsKey(linkList.get(i).get("link"))) {
				
			}
			jsonObject.put(linkList.get(i).get("link"), linkList.get(i));
		}
		
		return null;
	}

}
