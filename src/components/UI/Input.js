import React from 'react';

import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
	const { input, label } = props;

	return (
		<div className={classes.input}>
			<label htmlFor={input.id}>{label} </label>
			<input
				ref={ref}
				id={input.id}
				min={input.min}
				max={input.max}
				step={input.step}
				defaultValue={input.defaultValue}
			/>
		</div>
	);
});

export default Input;
