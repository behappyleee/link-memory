package com.link.back.user.dao;

import java.util.HashMap;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class LoginDao {

	Logger logger = LoggerFactory.getLogger(this.getClass());
	
	private static String loginMapper = "LoginMapper";
	
	@Autowired
	SqlSession sqlSession;
	
	public List<HashMap<String, Object>> getMembers() {
		return sqlSession.selectList(loginMapper + ".selectUserTest");
	}
	
	public Integer userIndexId(String userEmail) {
		return sqlSession.selectOne(loginMapper + ".userIndexId", userEmail);
	}
	
	public String getUserPassword(Integer userIndexId) {
		return sqlSession.selectOne(loginMapper + ".getUserPassword", userIndexId);
	}
	
	
	
}
