package com.link.back.test;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

	@RequestMapping("/")
	public String HelloWorld() {
		return "HelloWorld";
	}
	
}
