import { useDispatch } from "react-redux";
import { openModal } from "redux/modalSlice";

import scss from "./OrderBlock.module.scss";

export const OrderBlock = () => {
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(openModal());
	};

	return (
		<section className={scss.orderBlock}>
			<div className={`${scss.container} container`}>
				<div className={scss.inner}>
					<h2 className={`${scss.orderTitle} title`}>Ми Вам <br /> зателефонуємо<span>!</span></h2>
					<button
						type="button"
						className={`${scss.orderBtn} button doubleBorder`}
						onClick={handleClick}
					>
						Залишити заявку
					</button>
				</div>
			</div>
		</section>
	);
};