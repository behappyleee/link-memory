package com.link.back.linkData.dao;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class LinkDataDao {

	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	private final String LinkDataMapper = "LinkDataMapper";
	
	@Autowired
	SqlSession sqlSession;
	
	// 사용자가 저장한 Link List 데이터 가져옴
	public List<HashMap<String, Object>> userSavedLinkData(HashMap<String, Object> data) {
		return sqlSession.selectList(LinkDataMapper + ".userSavedLinkData", data);
	}
	
	// 사용자가 입력한 링크 URL 저장
	public int inserLinkData(HashMap<String, Object> data) {
		return sqlSession.insert(LinkDataMapper +".insertLinkData", data);
	}
	
	// 사용자가 입력한 링크 Comments 저장
	public int insertLinkComments(HashMap<String, Object> data) {
		return sqlSession.insert(LinkDataMapper + ".insertLinkComments", data);
	}
	
	
	
	
	
}
