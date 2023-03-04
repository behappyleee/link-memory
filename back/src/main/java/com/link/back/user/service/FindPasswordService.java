package com.link.back.user.service;


import java.util.HashMap;

import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class FindPasswordService {
	
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	final String bodyEncoding = "UTF-8"; //콘텐츠 인코딩
	
	public JSONObject findPassword(HashMap<String, Object> data) {
		logger.info("FindPasswordService DATA : {} ", data);
		JSONObject resultJson = new JSONObject();
		String inputUserEmail = (String) data.get("inputUserEmail");
		
		
		logger.info("STRING USER INPUT EMAIL DATA : {} ", inputUserEmail);
		
		
		// 회원 비밀번호 찾기 서비스 !!!
		// 1. 이메일 전송
		sendNewPasswordToEmail(inputUserEmail);
		
		// 2. 전송 된 임시 패스워드로 DB Update 하기
		
		// 3. 전송 및 DB 업데이트 성공 시 성공 완료 Alert 띄워 주기!
		return resultJson;
	}
	
	public void sendNewPasswordToEmail(String sendUserEmail) {
		JavaMailSender javaMailSender;
		String fromEmail = "";
		
		// Java SMTP 로 메일 전송 하기!
//		Properties props = new Properties();
//		JavaMailSender mailsender;
//		// SMTP 서버 - 메일을 전송 되기 위해 사용 되는 TCP / IP 서버
//		// POP3 서버 - 메일을 수신하기 위한 표준 Protocol, 서버에 위치한 자신의 메일 수신함을 가져 올 수 있음
//		String subject = "메일 발송 테스트";
//	    String fromEmail = "";
//	    String fromUsername = "SYSTEM MANAGER";
//	    String toEmail = ""; // 콤마(,)로 여러개 나열
//	    
//	    final String username = "";         
//	    final String password = "";
//	    
//	    StringBuffer sb = new StringBuffer();
//	    sb.append("<h3>안녕하세요</h3>\n");
//	    sb.append("<h4>EMIAL TEST 입니다.</h4>\n");    
//	    String html = sb.toString();
//	    
//		try {
//			// SSL 사용 시
//			props.put("mail.transport.protocol", "smtp");
//		    props.put("mail.smtp.host", "smtp.gmail.com");
//		    props.put("mail.smtp.port", "465");
//		    props.put("mail.smtp.auth", "true");
//		    
//		    props.put("mail.smtp.quitwait", "false");
//		    props.put("mail.smtp.socketFactory.port", "465");
//		    props.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
//		    props.put("mail.smtp.socketFactory.fallback", "false");
//		    
//			// TLS 사용 시
////			props.put("mail.smtp.ssl.enable", "true");ㄴㄴㄴㄴㄴㄴ
////			props.put("mail.smtp.starttls.enable", "true");
//		
////			props.put("mail.smtp.host", "smtp.gmail.com");
////			props.put("mail.smtp.socketFactory.fallback", "false");
////			props.put("mail.smtp.debug", "true");
////			props.put("mail.smtp.auth", "true");
//			
//			Session ssession = Session.getDefaultInstance(props, 
//					new Authenticator() {
//						@Override
//						protected PasswordAuthentication getPasswordAuthentication() {
//							return new PasswordAuthentication("", "");
//						}
//					}
//				);
//			
//			// 인증 정보
//			Authenticator auth = new SMTPAuthenticator("id", "password");
//			Session mailSession = Session.getDefaultInstance(props, auth);
//			MimeMessage mimeMessage = new MimeMessageImpl(mailSession);
//			
//			MimeMessageHelper message = new MimeMessageHelper(mailMessage,  );
//			
//		} catch(MessagingException e) {
//			e.printStackTrace();
//		} catch(Exception e ) {
//			e.printStackTrace();
//		}
		
	}
	
}
