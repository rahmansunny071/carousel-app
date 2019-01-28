import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Carousel from './Components/Carousel';
import * as serviceWorker from './serviceWorker';

//this is the JavaScript entrypoint for the CRA:Create React App. Create React App preconfigures 
//the required tools like Webpack and Babel.

/*
"src" folder structure
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
*/

//add Carousel component to the root container and render the DOM element

ReactDOM.render(<Carousel />, document.getElementById('root'));

serviceWorker.unregister();
