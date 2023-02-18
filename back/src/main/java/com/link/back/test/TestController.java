package com.link.back.test;

import java.util.HashMap;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.link.back.user.dao.LoginDao;

@RestController
public class TestController {

	Logger logger = LoggerFactory.getLogger(this.getClass());
	
//	@Autowired
//	LoginDao loginDao;
	
	@RequestMapping("/")
	public String HelloWorld() {
		
		
//		List<HashMap<String, Object>> test = loginDao.getMembers();
//		logger.info("TEST DATA : {} ", test);
		
		return "HelloWorld";
		
	}
	
}
