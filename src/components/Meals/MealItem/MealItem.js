import { useContext } from 'react';

import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';

const MealItem = (props) => {
	const cartCtx = useContext(CartContext);
	const { price, name, description, id } = props;
	const formatedPrice = `$${price.toFixed(2)}`;

	const addToCarHandler = (amount) => {
		cartCtx.addItem({
			id,
			name,
			amount,
			price,
		});
	};

	return (
		<li className={classes.meal}>
			<div>
				<h3>{name}</h3>
				<div className={classes.description}>{description}</div>
				<div className={classes.price}>{formatedPrice}</div>
			</div>
			<div>
				<MealItemForm onAddToCar={addToCarHandler} />
			</div>
		</li>
	);
};

export default MealItem;
