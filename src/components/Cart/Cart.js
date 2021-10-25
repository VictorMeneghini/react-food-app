import { useContext } from 'react';

import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = (props) => {
	const { onHideCart } = props;
	const cartCtx = useContext(CartContext);
	const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
	const hasItems = cartCtx.items.length > 0;

	const CartItemRemoveHandler = (id) => {
		console.log(id);
	};

	const CartItemAddHandler = (item) => {
		console.log(item);
	};

	const cartItems = (
		<ul classes={classes['cart-items']}>
			{cartCtx.items.map((item) => (
				<CartItem
					key={item.id}
					name={item.name}
					amount={item.amount}
					price={item.price}
					onRemove={CartItemRemoveHandler(null, item.id)}
					onAdd={CartItemAddHandler(null, item)}
				/>
			))}{' '}
		</ul>
	);
	return (
		<Modal onClose={onHideCart}>
			{cartItems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			<div className={classes.actions}>
				<button
					className={classes['button--alt']}
					type="button"
					onClick={onHideCart}
				>
					Close
				</button>
				{hasItems && (
					<button className={classes.button} type="button">
						Order
					</button>
				)}
			</div>
		</Modal>
	);
};

export default Cart;
