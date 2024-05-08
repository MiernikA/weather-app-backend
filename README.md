# Weather-Based Energy Estimation API

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
```bash

### Installing

Clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/weather-api.git
cd weather-api
```bash

Install the necessary dependencies:

```bash
npm install
```bash

### Running the server
Start the server with:

```bash
node server.js
```bash

The server will run on http://localhost:3000 by default.

### Usage
To fetch weather data and estimate energy generation:

```bash
GET /weather/:latitude/:longitude
```bash

### Parameters

- `latitude` - Latitude of the location (between -90 and 90).
- `longitude` - Longitude of the location (between -180 and 180).

### Example Request

```bash
curl http://localhost:3000/weather/34.05/-118.25
```bash
