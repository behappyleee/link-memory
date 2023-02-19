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
	
	public List<HashMap<String, Object>> userSavedLinkData(HashMap<String, Object> data) {
		return sqlSession.selectList(LinkDataMapper + ".userSavedLinkData", data);
	}
	
	
}
