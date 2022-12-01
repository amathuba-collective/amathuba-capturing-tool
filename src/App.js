import React from "react";
import "./Styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import WellnessForm from "./Screens/WellnessForm";
import Signupscreen from "./Auth/Signupscreen";
import Loginscreen from "./Auth/Loginscreen";
import Dashboard from "./Screens/Dashboard";

export default function App() {
	return (
		<Routes>
			<Route path='/' element={<Signupscreen />} />
			<Route path='/Loginscreen' element={<Loginscreen />} />
			<Route path='/Dashboard' element={<Dashboard />} />
			<Route path='/WellnessForm' element={<WellnessForm />} />
		</Routes>
	);
}
