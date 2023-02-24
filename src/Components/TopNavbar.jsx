import React from "react";
import { Navbar, Text } from "@nextui-org/react";
import { Layout } from "../Components/TopNavbarExtensions/Layout";
import AmathubaLogo from "./AmathubaLogo";
import "../Styles/TopNavbar.css";
import { Link, useNavigate } from "react-router-dom";
import { setLocalStorageAsString, setLocalStorageForObjects } from "../Utils/localStorageUtils";
// import { AiOutlineSearch } from 'react-icons/ai';
// import { SearchBar } from "./Youth";



export default function TopNavbar() {
	const navigate = useNavigate();
	const logOutUser = () => {
		setLocalStorageAsString("token", "");
		setLocalStorageForObjects("user", {});
		navigate("/");
	};
	return (
		<Layout>
			<Navbar isBordered variant='sticky' className='navbar'>
				<Navbar.Brand css={{ mr: "$4" }}>
					{/* spot for logo */}
					<Link className="homeBtn" to='/Dashboard'><AmathubaLogo /></Link>
					<Text b color='inherit' css={{ mr: "$1" }} hideIn='xs' ></Text>
					<Navbar.Content hideIn='xs' variant='highlight'>
						{/* <Navbar.Link isActive href='#'>
							Dashboard
						</Navbar.Link> */}
						{/* <Navbar.Link href='#'>Team</Navbar.Link>
						<Navbar.Link href='#'>Activity</Navbar.Link>
						<Navbar.Link href='#'>Settings</Navbar.Link> */}
					</Navbar.Content>
				</Navbar.Brand>

				<Navbar.Content
					css={{
						"@xsMax": {
							w: "100%",
							jc: "space-evenly",
						},
					}}>
					<Navbar.Item>
						<button onClick={logOutUser} className='btn text-light'>
							Logout
						</button>
					</Navbar.Item>
				</Navbar.Content>
			</Navbar>
		</Layout>
	);
}
