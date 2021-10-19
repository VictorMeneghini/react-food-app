import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = () => (
	<>
		<header className={classes.header}>
			<h1>ReactMeals</h1>
			<button type="button">Cart</button>
		</header>
		<div className={classes['main-image']}>
			<img alt="A table with a bunch of delicious food" src={mealsImage} />
		</div>
	</>
);

export default Header;
