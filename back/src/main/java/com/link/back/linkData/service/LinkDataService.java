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
		
		for(int i=0; i<userSavedLinkList.size(); i++) {
			HashMap<String, Object> linkData = userSavedLinkList.get(i);	
			jsonArray.add(linkData);
		}
		
		jsonData.put("USER_LINK_DATA", jsonArray);
		jsonData.put("DATA_SEARCH", "SUCCESS");
		
		return jsonData;
	}

}
