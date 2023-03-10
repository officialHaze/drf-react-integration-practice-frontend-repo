import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import Main from "./components/Main";
import Register from "./components/Register";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/main" element={<Main />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</div>
	);
}

export default App;
