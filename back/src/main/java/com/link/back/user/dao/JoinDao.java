package com.link.back.user.dao;

import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.link.back.user.dto.UserDto;

@Repository
public class JoinDao {

	Logger logger = LoggerFactory.getLogger(this.getClass());
	
	private final String mapperName = "UserMapper";
	
	@Autowired
	SqlSession sqlSession;
	
	public int countUserEamil(String userEmail) {
		return sqlSession.selectOne(mapperName + ".countUserEamil", userEmail);
	}
	
	public void saveJoinUseData(UserDto userDto) {
		sqlSession.insert(mapperName + ".saveJoinUseData", userDto);
	}
	
	
}
