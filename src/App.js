import React from "react";
import "./Styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import WellnessForm from "./Screens/WellnessForm";

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<WellnessForm />}/>
		</Routes>
	);
}
