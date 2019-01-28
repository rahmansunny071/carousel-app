import React from 'react';
import logo from './logo.svg';
import './Carousel.css';
import Slide from './Slide';
import Arrow from './Arrow';
import Indicator from './Indicator/Indicator';

//assumption: web service serves a list of image URLs 

const imgUrls = [
	'https://wpblink.com/sites/default/files/wallpaper/movie/72658/avengers-wallpapers-hd-72658-211614.png', 
	'https://wallpapermemory.com/uploads/608/captain-america-marvel-comics-background-hd-2560x1440-292735.jpg',
	'http://cdn.collider.com/wp-content/uploads/iron_man_2_movie_image_hi-res_03-600x337.jpg',
	'https://images6.alphacoders.com/620/thumb-1920-620069.jpg',
	'https://wallpaperaccess.com/full/110384.jpg'
];
/*
the Carousel component. holds sub-components: Slide, Arrow, and Indicator. 
Implemetns Carousel interaction logics
	Arrow click (left and right)
	Indicator Dot Click
*/

export default class Carousel extends React.Component {
	constructor (props) {
		super(props);
		
		this.state = {
			currentImageIndex: 0  //index of the current image being displayed
		};
		
		this.nextSlide = this.nextSlide.bind(this); //right arrow click action
		this.previousSlide = this.previousSlide.bind(this); //left arrow click action
		
	}
	
	//left arrow click action
	previousSlide () {
		const lastIndex = imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const setToLastIndex = currentImageIndex === 0; //true when current image is the first image
		
		//if current image is the first image, set new index to the last image
		//else decrease index by 1
		const index =  setToLastIndex ? lastIndex : currentImageIndex - 1;
		
		this.setState({
			currentImageIndex: index //set the state to appropriate image index
		});
	}
	
	//right arrow click action
	nextSlide () {
		const lastIndex = imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const setToFirstIndex = currentImageIndex === lastIndex; //true when current image is the last image
		
		//if current image is the last image, set new index to the first image
		//else increase index by 1
		const index =  setToFirstIndex ? 0 : currentImageIndex + 1;

		this.setState({
			currentImageIndex: index //set the state to appropriate image index
		});
	}

	
	onIndicatorDotClick = i => {

		// Do nothing if someone clicks on the currently active dot
		const { currentImageIndex } = this.state;
		
		// If the number taken from the i argument passed into onIndicatorDotClick is
		// equal to currently active dot, i, then do nothing
		if(i === currentImageIndex) 
		  return
	    // We need to go jump to Slide i corresponding to Dot i
		else
			this.setState({
				currentImageIndex: i
			});
	}
	
	render () {
		return (
			<div className="Carousel">
				<Arrow 
					direction="left" 
					clickFunction={ this.previousSlide } 
					glyph="&#9664;" 
				/>
				<Slide 
					imageUrl={ imgUrls[this.state.currentImageIndex] } 
				/>
				<Indicator 
					index={this.state.currentImageIndex} 
					images={imgUrls} 
					dotClick={this.onIndicatorDotClick}
				/>
				<Arrow 
					direction="right" 
					clickFunction={ this.nextSlide } 
					glyph="&#9654;" 
				/>
			</div>
		);
	}
}







