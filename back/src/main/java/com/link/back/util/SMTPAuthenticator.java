package com.link.back.util;



import javax.mail.Authenticator;
import javax.mail.PasswordAuthentication;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class SMTPAuthenticator extends Authenticator {
	
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	private String user;
	private String pwd;
	
	public SMTPAuthenticator(String user, String pwd) {
		this.user = user;
		this.pwd = pwd;
	}
	
	public PasswordAuthentication getPasswordAuthentication() {
		return new PasswordAuthentication(user, pwd);
	}
	
}
