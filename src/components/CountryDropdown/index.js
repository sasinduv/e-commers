import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa6";

const CountryDropdown = () => {
    return (
        <Button className="countryDrop">

            <div className="info">
                <span className="label">Your Location</span>
                <span className="name">Sri Lanka</span>
            </div>

            <span className="arrow">
                <FaAngleDown />
            </span>

        </Button>
    );
};

export default CountryDropdown;