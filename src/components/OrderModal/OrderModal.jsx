import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "redux/modalSlice";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

import scss from "./OrderModal.module.scss"

export const OrderModal = () => {
	const dispatch = useDispatch();
	const isOpen = useSelector((state) => state.modal.isOpen);

	useEffect(() => {
		const body = document.querySelector('body');
		// const html = document.querySelector('html');
		const modal = document.getElementById('modal');

		if (isOpen) {
			const scrollY = window.scrollY;
			// body.style.position = 'fixed';
			body.style.top = `-${scrollY}px`;
			// body.style.width = '100%';
			// html.style.overflow = 'hidden';

			// const handleScroll = () => {
			// 	window.scrollTo(0, scrollY);
			// };
			// const handleTouchMove = e => {
			// 	e.preventDefault();
			// };
			disableBodyScroll(modal);
			const handleEscape = e => {
				if (e.key === 'Escape') {
					dispatch(closeModal());
				}
			};
			const handleBackdrop = e => {
				if (e.target === document.getElementById('modal')) {
					dispatch(closeModal());
				}
			};

			// body.addEventListener('scroll', handleScroll, { passive: false });
			// body.addEventListener('touchmove', handleTouchMove, { passive: false });
			window.addEventListener('keydown', handleEscape);
			window.addEventListener('click', handleBackdrop);

			const cleanup = () => {
				// body.style.position = '';
				const scrollY = parseInt(body.style.top || '0', 10);
				body.style.top = '';
				enableBodyScroll(modal);
				// body.style.width = '';
				// html.style.overflow = '';
				// body.removeEventListener('scroll', handleScroll);
				// body.removeEventListener('touchmove', handleTouchMove);
				window.removeEventListener('keydown', handleEscape);
				window.removeEventListener('click', handleBackdrop);
				window.scrollTo(0, scrollY * -1);
			};
			return cleanup;
		} else {
			const cleanup = () => { };
			return cleanup;
		}
	}, [isOpen, dispatch]);

	return (
		<div className={`${isOpen ? `${scss.backdrop} ${scss.backdropOpen}` : scss.backdrop}`}>
			<div className={`${isOpen ? `${scss.modal} ${scss.modalOpen}` : scss.modal}`} id="modal">
				<div className={scss.content}>
					<button
						type="button"
						className={scss.close}
						aria-label="Close"
						onClick={() => dispatch(closeModal())}
					>
						Close
					</button>
					<div>Hello</div>
				</div>
			</div>
		</div>
	);
};