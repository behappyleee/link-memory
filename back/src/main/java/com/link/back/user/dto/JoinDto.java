package com.link.back.user.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class JoinDto {

	private String firstName;
	
	private String lastName;
	
	private String userEmail;
	
	private String userPassword;
	
}
