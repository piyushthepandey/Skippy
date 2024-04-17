# Skippy - Online Talent Portfolio Platform

## Introduction
Skippy is designed as a comprehensive platform for creative professionals to showcase their work and connect with potential employers. This platform simplifies the way artists and designers present their portfolios and interact with the job market, leveraging modern technologies to provide a seamless user experience.

## Features
- **User Profile Creation**: Users can create personalized profiles to showcase their professional portfolio.
- **Portfolio Management**: Upload and manage portfolio pieces including images, videos, and documents.
- **Advanced Search Functionality**: Filter and search for creatives or job opportunities within the community.
- **Interactive User Interface**: Utilizing React and the MVP design pattern for a responsive, user-centric interface.
- **Robust Authentication**: Secure login processes with integrations for third-party authentication.

## Tech Stack
- **Frontend**: React, TypeScript, Next.js
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **API**: GraphQL
- **Testing**: Jest, Enzyme
- **CI/CD**: Vercel for continuous integration and deployment

## Project Structure

/Skippy
|-- /components # UI components
|-- /pages # Application pages
|-- /public # Static files
|-- /styles # Styling for components
|-- /tests # Test files
|-- .env # Environment variables file
|-- README.md # Project documentation

### User Manual 

https://github.com/piyushthepandey/Skippy/wiki/User-Manual


### API Documentation 

## Frontend 

https://piyushthepandey.github.io/Skippy/docs/frontend/ 

## Backend 

https://piyushthepandey.github.io/Skippy/docs/backend/

## Installation

### Prerequisites
- Git
- Node.js
- npm (Node Package Manager)

### Setup
Clone the repository and navigate into the project directory:

git clone https://github.com/piyushthepandey/Skippy.git
cd Skippy

### Install the required dependencies:

npm install
Set up environment variables:

## Create a .env file in the root directory and fill in the necessary API keys and credentials:


GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
NEXTAUTH_URL=your-nextauth-url
NEXTAUTH_SECRET=your-nextauth-secret
CLOUDINARY_NAME=your-cloudinary-name
CLOUDINARY_KEY=your-cloudinary-key
CLOUDINARY_SECRET=your-cloudinary-secret
GRAFBASE_API_URL=your-grafbase-api-url
GRAFBASE_API_KEY=your-grafbase-api-key

Running the Project
To run the project locally, execute:

npm run dev
Open http://localhost:3000 in your browser to view the project.

### Deployment

To deploy Skippy, connect your GitHub repository to Vercel:

Select the Next.js template.
Update the .env values in the advanced settings on Vercel.
Build and deploy through the Vercel dashboard.
Contributing
We welcome contributions to the Skippy project. Please follow these steps to contribute:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes and commit them (git commit -am 'Add some feature').
Push to the branch (git push origin feature-branch).
Create a new Pull Request.

### Course Information 

Course: CSYE7230
Instructor: Professor Maged Elasaar

### Authors 

[Shrey Patel] - NUID [002246327]
[Viraj Gupta] - NUID [002817593]
[Mohit Bhagwanani] - NUID [002875638]
[Swapnil Patil] - NUID [002743839]
[Piyush Pandey] - NUID [002680284]