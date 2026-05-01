import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";

const CountryDropdown= () => {
    return(
        <div className="countryDropdown">
            <Button className="countryDrop">
                <span >Your Location</span>
                <span >Sri Lanka</span>
                <FaAngleDown />
            </Button>
        </div>
    )
}

export default CountryDropdown;