# weather-app backend

This project consists of a Node.js server that uses Express to serve an API. The API endpoint provides weather data and estimates the amount of energy that could be generated from a solar panel based on the sunshine duration in a specified geographical location (latitude and longitude).

## Features

- Fetch weather data using latitude and longitude.
- Estimate solar energy generation based on sunshine duration.
- Simple error handling for invalid geographic coordinates.
- CORS enabled for cross-origin requests.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- Node.js
- npm

    ```bash
  # Check Node.js installation
  node --version
  
  # Check npm installation
  npm --version


### Installing

Clone the repository to your local machine:

    
    git clone https://github.com/miernika/weather-api.git
    cd weather-api

Install the necessary dependencies:

    
    npm install

### Running the server
Start the server with:

    
    node server.js

The server will run on http://localhost:3000 by default.

### Usage
To fetch weather data and estimate energy generation:

    
    GET /weather/:latitude/:longitude


### Parameters

- `latitude` - Latitude of the location (between -90 and 90).
- `longitude` - Longitude of the location (between -180 and 180).

### Example Request

    
    curl http://localhost:3000/weather/34.05/-118.25

### Response
The response will include weather codes, maximum and minimum temperatures, and estimated energy generated based on the sunshine duration.

### Testing
Tests are written using Mocha and Chai. To run the tests, use:

    
    npm test
