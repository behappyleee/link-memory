package com.link.back.user;

import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.junit4.SpringRunner;


@SpringBootTest
@RunWith(SpringRunner.class)
public class PasswordEncodeTest {

	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	// 비밀번호 암호화 테스트
	@Test
	public void passwordEncodeTest() {
		String testPassword = "abcd1234";
		String encodedPassword = passwordEncoder.encode(testPassword);
				
		logger.info("ENCODED PASSWORD : {} ", encodedPassword);
		
		assertTrue(passwordEncoder.matches(testPassword, encodedPassword));
	}
	
	
}
