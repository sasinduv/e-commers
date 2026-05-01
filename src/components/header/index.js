import { Link } from "react-router-dom";

import { FaAngleDown } from "react-icons/fa6";
import CountryDropdown from "../CountryDropdown";

const Header = () => {
    return(
        <>
        <div className="headerWrapper" >
            <div className="top-strip bg-purple">
                <div className="container">
                    <p className="mb-0 mt-0 text-center">Welcome to our <b>online</b> store!</p>
                </div>
            </div>

            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="logoWrapper d-flex align-items-center col-sm-2">
                            <Link to={"/"}>
                                 <img src="/images/logo.png" alt="Logo" />
                            </Link>
                        </div>

                        <div className="col-sm-10 d-flex align-items-center justify-content-end part2">
                            <CountryDropdown />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header;