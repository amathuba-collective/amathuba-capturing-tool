import React from "react";
import { Navbar, Text } from "@nextui-org/react";
import { Layout } from "../Components/TopNavbarExtensions/Layout";
import AmathubaLogo from "./AmathubaLogo";
import "../Styles/TopNavbar.css";
import { Link, useNavigate } from "react-router-dom";
import {
  setLocalStorageAsString,
  setLocalStorageForObjects,
} from "../Utils/localStorageUtils";
import { AiOutlineSearch } from 'react-icons/ai';

export default function TopNavbar(props) {
  const navigate = useNavigate();
  const logOutUser = () => {
    setLocalStorageAsString("token", "");
    setLocalStorageForObjects("user", {});
    navigate("/");
  };

  return (
    <nav className="d-flex justify-content-between border-1 rounded sticky-top">
		<Link className="homeBtn mt-3" to="/Dashboard"><AmathubaLogo /></Link>
      <form className="d-flex" role="search">
		<AiOutlineSearch className="searchIcon2"/>
		<input
        className="searchBar"
        type={"search"}
        placeholder="Type to search"
        onChange={(e) => props.setSearch(e.target.value)}
      />
      </form>

      <button onClick={logOutUser} className="btn mx-5 text-light mt-3 mb-3">
        Logout
      </button>
    </nav>
    // <Layout>
    // 	<Navbar isBordered variant='sticky' className='navbar'>
    // 		<Navbar.Brand css={{ mr: "$4" }}>
    // 			{/* spot for logo */}
    // 			<Link className="homeBtn" to='/Dashboard'><AmathubaLogo /></Link>
    // 			<Text b color='inherit' css={{ mr: "$1" }} hideIn='xs' ></Text>
    // 			<Navbar.Content hideIn='xs' variant='highlight'>
    // 				{/* <Navbar.Link isActive href='#'>
    // 					Dashboard
    // 				</Navbar.Link> */}
    // 				{/* <Navbar.Link href='#'>Team</Navbar.Link>
    // 				<Navbar.Link href='#'>Activity</Navbar.Link>
    // 				<Navbar.Link href='#'>Settings</Navbar.Link> */}
    // 				{/* <AiOutlineSearch className='searchIcon'/>*/}
    // 				<SearchBar />
    // 			</Navbar.Content>
    // 		</Navbar.Brand>

    // 		<Navbar.Content
    // 			css={{
    // 				"@xsMax": {
    // 					w: "100%",
    // 					jc: "space-evenly",
    // 				},
    // 			}}>
    // 			<Navbar.Item>
    // 				<button onClick={logOutUser} className='btn text-light'>
    // 					Logout
    // 				</button>
    // 			</Navbar.Item>
    // 		</Navbar.Content>
    // 	</Navbar>
    // </Layout>
  );
}
