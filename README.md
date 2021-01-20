<p align="center">
  <a href="https://github.com/jcy2704/weather-app">
    <img src="https://res.cloudinary.com/growsurf-prod/image/upload/v1582211139/production/gnysw2objzekbagrqiax.png" alt="Logo" width="350" height="70">
  </a>
</p>

<h1 align="center">Weather App</h1>

<p align="center">
  <strong>Project created by Steven Jack Chung</strong>
  <br>
  Project created using <a href="https://openweathermap.org/">OpenWeatherMap API</a> and <a href="https://unsplash.com">Unsplash API</a>
</p>

<p align="center">
  <a href="https://github.com/jcy2704/weather-app/issues">
    <img src="https://img.shields.io/badge/REPORT%20A%20BUG-purple?style=for-the-badge">
  </a>
   ‎ ‎ ‎ ‎
  <a href="https://github.com/jcy2704/weather-app/issues">
    <img src="https://img.shields.io/badge/Request%20a%20feature-purple?style=for-the-badge">
  </a>
</p>

# Weather App

Weather App is a dynamic app that shows the current weather of different countries. Used JavaScript with DOM API to render and manipulate HTML. Implemented asynchrous functions and promises to access public APIs; OpenWeatherMap API to render the weather information and Unsplash API to render the background depending on the current weather.

## Built With

- HTML
- CSS
- Bootstrap
- JavaScript
- [OpenWeatherMap API](https://openweathermap.org/)
- [Unsplash API](https://unsplash.com)

## Live Preview

[Weather App](https://jcy2704.github.io/weather-app/)

## Getting Started

**This project was created to understand more about how api worked and how to access it in JavaScript.**

To get a local copy up and running follow these simple example steps.

## Prerequisites

Computer running Mac OS, Windows, or Linux Ubuntu.
Internet browser: Firefox, Google Chrome, Opera...

Install [NodeJs](https://nodejs.org/en/download/)

## Setup

Download the code or copy the git repository to your computer.

To install dependencies you need to run the following command in your terminal.

```
  npm install
```

## Usage

Run live server extension in VSCode or run the index.html file in dist folder from the cloned repository.

### Environmental Variables

To create your own environmental variable for your API Key create a `.env` file in your root folder. Add `.env` to your gitignore as well if not added.


In your `.env` file create a variable and assign your key to it.

```
    // .env file

    API_KEY=123Abc456DefG...
    API_KEY2=123Abc456DefG...
```

To use your API key use `process.env` and attach your API variable.

```
    weatherKey = process.env.API_KEY;
```

### Compile and Run

After changing the code you will need to compile your work to be able to run.

Use these scripts to compile your work.

**Build** to compile once your code.

```
    npm run build
```

**Watch** script to compile everytime you make a change, great combination with live server extension.

```
    npm run watch
```

## Authors

👤 **Steven Jack Chung**

- GitHub: [@jcy2704](https://github.com/jcy2704)
- Twitter: [@yiak_](https://twitter.com/yiak_)
- LinkedIn: [Steven Jack Chung](https://linkedin.com/in/stevenjchung)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/jcy2704/weather-app/issues).

## Show your support

Give a ⭐️ if you like this project!