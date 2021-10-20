import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
	const { handleOnClick } = props;

	return (
		<button type="button" className={classes.button} onClick={handleOnClick}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your cart</span>
			<span className={classes.badge}>3</span>
		</button>
	);
};

export default HeaderCartButton;
