import classes from './MealItem.module.css';

const MealItem = (props) => {
	const { price, name, description } = props;
	const formatedPrice = `$${price.toFixed(2)}`;

	return (
		<li className={classes.meal}>
			<div>
				<h3>{name}</h3>
				<div className={classes.description}>{description}</div>
				<div className={classes.price}>{formatedPrice}</div>
			</div>
			<div>
				<p>form here</p>
			</div>
		</li>
	);
};

export default MealItem;
