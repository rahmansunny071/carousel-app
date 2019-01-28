import React from 'react'

//takes the arrow direction as input, the function that implements the click logic, the arrow image
//returns Arrow component
const Arrow = ({ direction, clickFunction, glyph }) => (
	<div 
		className={ `slide-arrow ${direction}` } 
		onClick={ clickFunction }>
		{ glyph } 
	</div>
);


export default Arrow