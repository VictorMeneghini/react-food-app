import classes from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = () => {
	const cartItems = (
		<ul classes={classes['cart-items']}>
			{[{ id: 'c1', name: 'sushi', amount: 2, price: 12.99 }].map((item) => (
				<li id={item.id}>{item.name}</li>
			))}{' '}
		</ul>
	);
	return (
		<Modal>
			{cartItems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>35.62</span>
			</div>
			<div className={classes.actions}>
				<button className={classes['button--alt']} type="button">
					Close
				</button>
				<button className={classes.button} type="button">
					Order
				</button>
			</div>
		</Modal>
	);
};

export default Cart;
