import { Link } from "react-router-dom";

import CountryDropdown from "../CountryDropdown";
import Button from "@mui/material/Button";

import { IoSearchCircleOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { BsCart4 } from "react-icons/bs";

const Header = () => {
    return (
        <>
            <div className="headerWrapper">

                {/* Top Strip */}
                <div className="top-strip bg-purple">
                    <div className="container">
                        <p className="mb-0 mt-0 text-center">
                            Welcome to our <b>online</b> store!
                        </p>
                    </div>
                </div>

                {/* Main Header */}
                <header className="header">
                    <div className="container">
                        <div className="headerRow">

                            {/* Logo */}
                            <div className="logoWrapper">
                                <Link to={"/"}>
                                    <img src="/images/logo.png" alt="Logo" />
                                </Link>
                            </div>

                            {/* Country Dropdown */}
                            <div className="part2">
                                <CountryDropdown />
                            </div>

                            {/* Search Bar */}
                            <div className="headerSearch">
                                <input
                                    type="text"
                                    placeholder="Search for products..."
                                />

                                <Button>
                                    <IoSearchCircleOutline />
                                </Button>
                            </div>

                            {/* Right Side */}
                            <div className="part3">

                                <Button className="circle">
                                    <FaRegCircleUser />
                                </Button>

                                <div className="cartTab">

                                    <span className="price">$3.50</span>

                                    <div className="position-relative">

                                        <Button className="circle">
                                            <BsCart4 />
                                        </Button>

                                        <span className="cartCount">
                                            2
                                        </span>

                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </header>

            </div>
        </>
    );
};

export default Header;