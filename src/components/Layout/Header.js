import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
	const { onShowCart } = props;

	return (
		<>
			<header className={classes.header}>
				<h1>ReactMeals</h1>
				<HeaderCartButton handleOnClick={onShowCart} />
			</header>
			<div className={classes['main-image']}>
				<img
					alt="A table with a bunch of delicious food"
					src={mealsImage}
					loading="lazy"
				/>
			</div>
		</>
	);
};

export default Header;
