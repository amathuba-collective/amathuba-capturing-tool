import React from "react";
import Logo from "../Assets/Original.png";
import "../Styles/AmathubaLogo.css";

export default function AmathubaLogo() {
	return (
		// <div className='d-flex'>
		<div className='d-flex flex-row-reverse align-items-center'>
			<span className='logoTitle fs-4 fw-semibold'>Amathuba</span>
			<img src={Logo} alt='logo' className='amathubaLogo' />
		</div>
		// <div>
		// 	<p className='fs-4'>Amathuba</p>
		// </div>
		// </div>
	);
}
