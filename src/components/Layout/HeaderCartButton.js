import { useContext } from 'react';

import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
	const { handleOnClick } = props;
	const cartCtx = useContext(CartContext);

	const numberOfCartItems = cartCtx.items.reduce(
		(acc, item) => acc + item.amount,
		0
	);

	return (
		<button type="button" className={classes.button} onClick={handleOnClick}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your cart</span>
			<span className={classes.badge}>{numberOfCartItems}</span>
		</button>
	);
};

export default HeaderCartButton;
