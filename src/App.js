import React from "react";
import "./Styles/App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import WellnessForm from "./Screens/WellnessForm";
import Signupscreen from "./Auth/Signupscreen";
import Loginscreen from "./Auth/Loginscreen";
import WelcomeScreen from "./Screens/WelcomeScreen";
import Dashboard from "./Screens/Dashboard";
import YouthProfile from "./Screens/YouthProfile";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Signupscreen />} />
				<Route path='/Loginscreen' element={<Loginscreen />} />
				<Route path='/WelcomeScreen' element={<WelcomeScreen />} />
				<Route path='/Dashboard' element={<Dashboard />} />
				<Route path='/YouthProfile' element={<YouthProfile />} />
				<Route path='/WellnessForm' element={<WellnessForm />} />
			</Routes>
		</BrowserRouter>
	);
}
