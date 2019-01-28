This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Access the Carousel App

Access the live app at [https://rahmansunny071.github.io/carousel-app/](https://rahmansunny071.github.io/carousel-app/)


## Code Structure

The `src` folder contains the `Carousel` implementations. The structure is as follows:

```
src/
 index.js
 Componets/
  Carousel.js --- the main component, Carousel
  Carousel.css --- styleSheet
  Slide.js --- Each slide of a carousel
  Arrow.js --- arrow factory, renders left and right arrow
  Indicator/
   Indicator.js --- slide index indicator with a collection of dots
   Dot.js --- each dot of an indicator
```

## Development Mode

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Production Mode

In the project directory, you can run:

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `serve -s build`

Static server that hosts the build on port 5000. [http://localhost:3000](http://localhost:5000/)

