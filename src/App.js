import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateResume from "./pages/CreateResume";
import PreviewResume from "./pages/PreviewResume";
import { Container } from "react-bootstrap";

function App() {
	return (
		<BrowserRouter>
			<Container fluid className='p-0 pb-4 '>
				<Navbar />
				<Routes>
					<Route path='/' element={<CreateResume />} />
					<Route path='/preview' element={<PreviewResume />} />
				</Routes>
			</Container>
		</BrowserRouter>
	);
}

export default App;
