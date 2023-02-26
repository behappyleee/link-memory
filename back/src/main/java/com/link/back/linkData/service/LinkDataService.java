package com.link.back.linkData.service;

import java.io.InputStream;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.tomcat.util.http.fileupload.FileUtils;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.link.back.linkData.dao.LinkDataDao;

import ch.qos.logback.core.util.FileUtil;

@SuppressWarnings("unchecked")
@Service
public class LinkDataService {
	
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	LinkDataDao linkDataDao;
	
	public JSONObject saveUserInputLink(String testStr, MultipartFile muf) {
		JSONObject json = new JSONObject();
		
		try {
			// TODO
			// Multipart File 에 대하여 더 고민하기 !!
			// Multipart File 속성에 대하여 더 공부하기 !!!
			// Link Data File 저장 할 DB 생성 하기 !!!!
			String fileName = muf.getOriginalFilename();		// File Name
			Long fileSize = muf.getSize();						// File Size
			String fileContentType = muf.getContentType();		// ContentType
			byte[] fileDataBytes = muf.getBytes();				// Data bytes
			
			
		} catch(Exception e) {
			e.printStackTrace();
		}
		
		json.put("CONNECTION_TEST", "SUCCESS");
		return json;
	}
	
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
	
	public JSONObject sortListByLink(List<HashMap<String,Object>> linkList) {
		logger.info("JSONArrayData : {} ", linkList);
		JSONObject jsonObject = new JSONObject();
		if(linkList.isEmpty()) return jsonObject;
		
		JSONArray jsonArray = null;
		
		for(int i=0; i<linkList.size(); i++) {
			jsonArray = new JSONArray();
			if(jsonObject.containsKey(linkList.get(i).get("link"))) {
				jsonArray = (JSONArray)jsonObject.get(linkList.get(i).get("link"));
				jsonArray.add(linkList.get(i));
				jsonObject.put(linkList.get(i).get("link"), jsonArray);
				continue;
			}
			jsonArray.add(linkList.get(i));
			jsonObject.put(linkList.get(i).get("link"), jsonArray);
		}
		
		logger.info("AFTER JSON PARSING DATA CHECK : {} " , jsonObject);
		
		return jsonObject;
	}

}
