import { Outlet } from "react-router-dom";

import { NavState } from "context/navState";
import { Header } from "components/Header/Header";
import { OrderModal } from "components/OrderModal/OrderModal";

export const SharedLayout = () => {

	return (
		<>
			<div className="wrapper">
				<NavState>
					<Header />
				</NavState>
				<main>
					<Outlet />
				</main>
			</div>
			<OrderModal />
		</>
	);
};