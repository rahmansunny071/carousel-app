import React from 'react'

//given the image, generate the Slide component that conatins the image with added styles 

const Slide = ({ imageUrl }) => {
	const styles = {
		backgroundImage: `url(${imageUrl})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center'
	};
	
	return (
		<div className="slide" style={styles}></div>
	);
}


export default Slide