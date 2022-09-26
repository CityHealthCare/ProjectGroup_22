package com.example.config;

import java.util.Properties;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Component;

@Component
public class GmailService 
{
	 private static final Logger logger=LogManager.getLogger(GmailService.class);
	 
	public void send(String email,String pass) {
      String from="Cityhealthcare22@gmail.com";
      String password="aztdkwtvwacaizde";
      String  to=email; 
      System.out.println(email);
      System.out.println(pass);
      Properties props = new Properties();    
      props.put("mail.smtp.host", "smtp.gmail.com");    
      props.put("mail.smtp.socketFactory.port", "587");    
      props.put("mail.smtp.socketFactory.class",    
                "javax.net.ssl.SSLSocketFactory");    
      props.put("mail.smtp.auth", "true");    
      props.put("mail.smtp.port", "587");   
      props.put("mail.smtp.starttls.enable","true");
      props.put("mail.smtp.ssl.trust", "smtp.gmail.com");


      //get Session   
      Session session = Session.getInstance(props,    
       new javax.mail.Authenticator() {    
       protected PasswordAuthentication getPasswordAuthentication() {    
       return new PasswordAuthentication(from,password);  
       }    
      });    
      //compose message    
      try {
	         // Create a default MimeMessage object.
	         MimeMessage message = new MimeMessage(session);

	         // Set From: header field of the header.
	         message.setFrom(new InternetAddress(from));

	         // Set To: header field of the header.
	         message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
//           if(firstName==null)
//           {
//	         // Set Subject: header field
	         message.setSubject("City Health Care Registration");

	         // Send the actual HTML message, as big as you like
	         message.setContent("<p>Hello User,<br>You have successfully registered to city health care portal...<br>With UserId="+to+" <br><br>Please login using UserId"+to+"and registered passward ..<br>you can enjoy services provided by city health care portal<br>Thanks and Regards,<br>Team CityHealthCare</p>", "text/html");  
          
	         Transport.send(message);
	         System.out.println("Email sent successfully....");
	         
	      } 
      catch (MessagingException e) {
    	  e.printStackTrace();
    	  logger.error(e);
    	  throw new RuntimeException(e);
    	  }    
  }

	




}
