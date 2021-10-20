import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = () => <div className={classes.backdrop} />;

const ModalOverlay = (props) => {
	const { children } = props;
	return (
		<div className={classes.modal}>
			<div className={classes.content}>{children}</div>
		</div>
	);
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
	const { children } = props;
	return (
		<>
			{ReactDOM.createPortal(<Backdrop />, portalElement)}
			{ReactDOM.createPortal(
				<ModalOverlay>{children}</ModalOverlay>,
				portalElement
			)}
		</>
	);
};

export default Modal;
