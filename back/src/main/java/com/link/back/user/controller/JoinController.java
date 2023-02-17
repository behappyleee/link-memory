package com.link.back.user.controller;

import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.link.back.user.service.JoinService;

@Controller
public class JoinController {

	Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	JoinService joinService;
	
	@RequestMapping("/userJoin")
	public ModelAndView userJoin(HttpServletRequest req, @RequestParam HashMap<String, Object> data) {
		logger.info("JoinController /userJoin data : {} ", data);
		ModelAndView mv = new ModelAndView("jsonView");
		
		joinService.userJoin(mv, data);
		return mv;
	}
	
	
	
}
