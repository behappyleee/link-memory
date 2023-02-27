package com.link.back.linkData.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.link.back.linkData.dao.LinkDataDao;

@SuppressWarnings("unchecked")
@Service
public class LinkDataService {
	
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	LinkDataDao linkDataDao;
	
	public JSONObject saveUserInputLink(HttpServletRequest request, 
			HashMap<String, Object> data, MultipartFile muf) {
		JSONObject json = new JSONObject();
		
		try {
			HashMap<String, Object> saveLinkData = new HashMap<String, Object>();
			HttpSession session = request.getSession(); 
			// TODO 
			// Comments / Data ---> Link 가 Key 값 이므로 해당 
			// Link 부터 저장 후 comments AND Photo image 저장 하기 !!
			
			// TODO
			// 사진은 DB 에 저장 / COMMENTS 는 DB 에 저장
			// data --> comments / link Data 정보 담김
			// Multipart File 에 대하여 더 고민하기 !!
			// Multipart File 속성에 대하여 더 공부하기 !!!
			// Link Data File 저장 할 DB 생성 하기 !!!!
			String fileName = muf.getOriginalFilename();		// File Name
			Long fileSize = muf.getSize();						// File Size
			String fileContentType = muf.getContentType();		// ContentType
			byte[] fileDataBytes = muf.getBytes();				// Data bytes
			
			String sendData = (String)data.get("sendData");
			JSONParser parser = new JSONParser();
			Object jsonObj = parser.parse(sendData);
			JSONObject inputLinkJsonData = (JSONObject)jsonObj;
			
			// TODO 
			// Link Validation 확인 하기 같은 사용자는 같은 링크를 저장 못함
			// 1. LinkData 저장
			String inputLink = (String)inputLinkJsonData.get("inputLink");
			saveLinkData.put("userEmail", session.getAttribute("CURRENT_SESSION_USER_EMAIL"));
			saveLinkData.put("inputSaveLink", inputLink);
			linkDataDao.inserLinkData(saveLinkData);			
			
			// 2. 코멘트 저장 List 데이터 mapper for 문 돌리기
			JSONArray commentsJsonArray = (JSONArray)inputLinkJsonData.get("inputComments");
			List<String> commentsList = jsonArrayToList(commentsJsonArray);
			saveLinkData.put("inputComments", commentsList);
			
			// 3. Image File DB 에는 Image Meta 정보 만 저장
			JSONArray inputComments = (JSONArray)inputLinkJsonData.get("inputComments");
			
			json.put("RESULT", "SUCCESS");
		} catch(Exception e) {
			e.printStackTrace();
			json.put("RESULT", "FAIL");
		}
		
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

	public List<String> jsonArrayToList(JSONArray jsonArray) {
		List<String> strList = new ArrayList<>();
		for(int i=0; i<jsonArray.size(); i++) {
			strList.add((String)jsonArray.get(i));
		}
		return strList;
	}
	
	
	
}
