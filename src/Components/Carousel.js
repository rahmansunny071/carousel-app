import React from 'react';
import logo from './logo.svg';
import './Carousel.css';
import Slide from './Slide';
import Arrow from './Arrow';
import Indicator from './Indicator/Indicator';

const imgUrls = [
	'https://wpblink.com/sites/default/files/wallpaper/movie/72658/avengers-wallpapers-hd-72658-211614.png', 
	'https://wallpapermemory.com/uploads/608/captain-america-marvel-comics-background-hd-2560x1440-292735.jpg',
	'http://cdn.collider.com/wp-content/uploads/iron_man_2_movie_image_hi-res_03-600x337.jpg',
	'https://images6.alphacoders.com/620/thumb-1920-620069.jpg',
	'https://wallpaperaccess.com/full/110384.jpg'
];

export default class Carousel extends React.Component {
	constructor (props) {
		super(props);
		
		this.state = {
			currentImageIndex: 0
		};
		
		this.nextSlide = this.nextSlide.bind(this);
		this.previousSlide = this.previousSlide.bind(this);
		
	}
	
	previousSlide () {
		const lastIndex = imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === 0;
		const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
		
		this.setState({
			currentImageIndex: index
		});
	}
	
	nextSlide () {
		const lastIndex = imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === lastIndex;
		const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

		this.setState({
			currentImageIndex: index
		});
	}

	
	handleDotClick = i => {
		//const { 
		//  currentImageIndex, 
		//  translateValue, 
		//  setTranslateValue, 
		//  setIndex 
		//} = this.props
		// Do nothing if someone clicks on the currently active dot
		const { currentImageIndex } = this.state;
		
		
		if(i === currentImageIndex) 
		  return
		else
			this.setState({
				currentImageIndex: i
			});

		// If the number taken from the i argument passed into handleDotClick is
		// less than the currently active dot, we obviously need to move backwards to a previous slide.
		//if(i > currentImageIndex) {
		//  setTranslateValue(-i * this.slideWidth())
		//}    
		// We need to go forward to a particular slide
		//else {
		//  setTranslateValue(
		//	translateValue + (index - i) * this.slideWidth()
		//  )
	}
	
	render () {
		return (
			<div className="Carousel">
				<Arrow direction="left" clickFunction={ this.previousSlide } glyph="&#9664;" />
				<Slide imageUrl={ imgUrls[this.state.currentImageIndex] } />
				<Indicator index={this.state.currentImageIndex} images={imgUrls} dotClick={this.handleDotClick}/>
				<Arrow direction="right" clickFunction={ this.nextSlide } glyph="&#9654;" />
			</div>
		);
	}
}







