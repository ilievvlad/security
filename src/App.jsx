import { Provider } from "react-redux";
import { store } from "redux/store";
import { Navigate, Route, Routes } from "react-router-dom";

import { SharedLayout } from "components/SharedLayout/SharedLayout";
import { Home } from "pages/Home/Home";
import { About } from "pages/About/About";

export const App = () => {
	return (
		<Provider store={store}>
			<Routes>
				<Route path="/" element={<SharedLayout />}>
					<Route index element={<Home />} />
					<Route path="/about" element={<About />} />
				</Route>
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</Provider>
	);
};