import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ReferAndEarn from "./pages/ReferAndEarn/ReferAndEarn";
import FriendsReferred from "./pages/ReferAndEarn/FriendsReferred";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Routes>
					<Route path='/' element={<ReferAndEarn />} />
					<Route path='friendsreferred' element={<FriendsReferred />} />
					{/* <Route path='*' element={<NoPage />} /> */}
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
