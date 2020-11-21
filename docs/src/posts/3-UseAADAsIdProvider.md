# Use Azure Active Directory as An Id Provider
*2020/07*

This blog will show you how and when you need to use Azure Active Directory as an Id provider, to manage authentication/authorization for your application.

## What is an Id provider?


An Id provider is usually a service which offers to handle user authentication as an outsourcing entity. 

It helps to create, manage, and maintain identity and authorization information.

Imagine that if you are going to create an EC site. End users will use this site to search products, pick things to carts and pay with credit card. In order to record necessary information like address, card number etc., users will need to login first  

Instead of establishing the whole 


 


- SSO (Id provider, token, validation)
- How do you make advantage of it 

What is Azure AD 
- from ms doc

What is a token
- access token & id token


How to get access token? Two ways:
	○ Public apps:
		§ Web msal.js: Redirect or start auth dialog to ask user to input id and password, sample @BotWebsite
		§ UWP C# Package:  Microsoft.Identity.Client: sample @FormDef UWP
	○ Confidential apps: 
		§ Batch, CICD: use client id and secret
			
What is needed to get AAD access token:
	○ Tenant id
	○ Client id
	○ Scope ==> clientid/.default
		
How to Validate access token
○ JWT validation general way: With public key,  sample @ BotTokenFunction
○ API C# package: 
	using Microsoft.AspNetCore.Authentication;
	using Microsoft.AspNetCore.Authentication.AzureAD.UI;
		
		@sample API
