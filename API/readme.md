> [APIs Explained | Real World Examples](https://www.youtube.com/watch?v=ZveW4_ZJtVY)

# Understanding APIs
APIs, or Application Programming Interfaces, allow different software applications to communicate with each other.
Imagine you've spent years and millions of pounds developing an application and you want it to integrate with other
popular applications. Building custom integrations for each third-party app would be impractical. This is where APIs come in handy.

## What is an API?

An API acts as a doorway into your application, 
allowing other applications to access your data and features without needing custom code. 
For example, if a custom app wants to access your data, it sends an API request. 
These requests are typically HTTP messages. 

## HTTP Methods
The main HTTP methods used in APIs are:

- **GET**: Read information.
- **POST**: Create new data.
- **PUT**: Update existing data.
- **PATCH**: Modify existing data.
- **DELETE**: Remove data.

These correspond to CRUD operations (Create, Read, Update, Delete). 
After an API request is sent, the application responds with
the requested data, often in JSON or XML format.

## Example: Weather Application

To illustrate, consider a weather app with a global network of weather stations.
A mobile app can use an API to request weather data from this application by sending 
an API GET request to a URL that includes the city and an API key for tracking 
and preventing abuse. The weather app responds with data, such as temperature
and humidity, in JSON format. The mobile app can then display
this data in a user-friendly interface.

## Example: YouTube Data Access

Similarly, for accessing data from YouTube, you can use YouTube's API.
You'd start by visiting the YouTube API documentation, setting up a Google project to obtain credentials,
and using an API client like Postman to send requests and receive responses in JSON format. 
The response includes data such as view count, subscriber count, and video count, which 
can be used to build applications like Socialblade that provide 
detailed statistics on YouTube channels.

## Conclusion

APIs are ubiquitous in modern applications, enabling endless possibilities for integration and functionality enhancement.
