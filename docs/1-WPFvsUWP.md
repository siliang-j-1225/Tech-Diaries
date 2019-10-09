
# WPF vs UWP

In a recent project (July 2019), there is a requirement for developing a front end windows 10 app. This application will interact with server side Restful API and save data to local storage. One of the first questions I have investigated into is, which one should we choose, WPF or UWP?

## What is WPF

As stated in Microsoft documentation,
> "Windows Presentation Foundation (WPF) is a UI framework that creates desktop client applications."

WPF uses XAML in the view layer, which makes it much easier to develop a flexible, modern UI than the previous winForm.

WPF is built and run based on .Net framework. 

## What is UWP app

UWP, shorted for Universal Windows Platform, is designed to be run on all devices based on Windows 10. UWP is programmable for UI, using XAML, HTML, or DirectX.


UWP has a feature that quite different from WPF in security, as stated in Microsoft documentation, 
> "UWP apps declare which device resources and data they access. **The user must authorize that access**."

This feature is realized by using the WinRT API which will be discussed later in this blog.


## The difference between WPF and UWP

Although WPF and UWP are both frameworks that help to create windows application, but in fact they are two completely different products. It is not only because of the libraries/APIs been used in the projects or about the designs of UI controls, It is also because that they are built with different cores and targeting for different scenarios.

### **Firstly, runtime**
WPF is build on .NET framework which UWP is not. WPF applications are developed with .NET SDK and run on **.NET Common Language Runtime** (.NET CLR), while UWP applications are developed with Windows SDK and run on **Windows Runtime** (WinRT). 

One thing you should be noticed is that .NET CLR interacts with windows using win32 API, while WinRT doesn't. WinRT uses WinRT API. Compared with Win32, WinRT is newer and is able to handle the management of access permission, while win32 can not. That is why UWP is said to be safer than usual WPF applications. 

(Released order of all windows API: Win16, Win32, Win64, WinRT)

However, that also means, if in the application you must use win32 API for some reasons, you need to think very carefully about choosing UWP.


### **Secondly, UI designs**
UWP is designed to be a universal application which compatible with all kinds of windows devices. 


> "Able to use device specific capabilities and adapt the UI to different device screen sizes, resolutions, and DPI.
Available from the Microsoft Store on all devices (or only those that you specify) that run on Windows 10. "

There is no doubt that UWP has better and more plentiful UI components, styles than WPF. Also, UWP works better in touch mode.

### **Thirdly, Windows store**
Windows store only accepts UWP. But there are some ways you can wrap WPF into UWP (like desktop bridge). 


### **Some others**
Before the year of 2019, WPF can only be developed with .Net Framework. But as the dotnet core 3 released, we managed to develop and compile the WPF application with dotnet core 3 preview version. 

I will add more to this blog about the difference between UWP and WPF.  

*TBC*

{% include comments.html %}