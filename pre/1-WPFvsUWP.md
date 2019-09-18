
# WPF vs UWP

In a recent project (July 2019), there is a requirement for developing an application to be used in windows 10 platform. One of the first questions we need to figure out is, which one should we choose, WPF or UWP?

## What is WPF

As stated in Microsoft documentation,
> "Windows Presentation Foundation (WPF) is a UI framework that creates desktop client applications."

WPF uses XAML in the view layer, which makes it much easier to develop a flexible, modern UI than the previous winForm.

## What is UWP



## The difference between WPF and UWP

Although WPF and UWP are both frameworks that help to create windows application, but in fact they are two completely different products. It is not only because of the libraries/APIs been used in the projects or about the designs of UI controls, It is also because that they are built with different cores and targeting for different scenarios.

### **Firstly, runtime**
WPF is build on .NET framework which UWP is not. WPF applications are developed with .NET SDK and run on .NET Common Language Runtime, while UWP applications are developed with Windows SDK and run on Windows Runtime. 

### **Secondly, UI designs**

### **Thirdly, Windows store**
Windows store only accepts UWP. although there are some ways you can 

