import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = (props) => {
	const { onClose } = props;

	const handleKeyDown = (event) => {
		if (event.key === 'Escape') {
			onClose();
		}
	};

	return (
		<div
			label="close-modal"
			role="button"
			className={classes.backdrop}
			onClick={onClose}
			onKeyPress={handleKeyDown}
			tabIndex={0}
		/>
	);
};

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
	const { children, onClose } = props;
	return (
		<>
			{ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
			{ReactDOM.createPortal(
				<ModalOverlay>{children}</ModalOverlay>,
				portalElement
			)}
		</>
	);
};

export default Modal;
