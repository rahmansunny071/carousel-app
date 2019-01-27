import React from 'react'

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