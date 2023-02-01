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
import { Auth0Provider } from "@auth0/auth0-react";

export default function App() {
	return (
		<Auth0Provider
			domain='dev-2tm37do51xcnya0o.us.auth0.com'
			clientId='YDR3sKv4Potc6OH8DV87QjPLqh66qTOv'
			redirectUri={window.location.origin}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Loginscreen />} />
					<Route path='/Signupscreen' element={<Signupscreen />} />
					<Route path='/WelcomeScreen' element={<WelcomeScreen />} />
					<Route path='/Dashboard' element={<Dashboard />} />
					<Route path='/YouthProfile/:id' element={<YouthProfile />} />
					<Route path='/WellnessForm/:id' element={<WellnessForm />} />
				</Routes>
			</BrowserRouter>
		</Auth0Provider>
	);
}
