import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from '@mui/material/Dialog';
import { FaAngleDown } from "react-icons/fa6";
import { IoSearchCircleOutline } from "react-icons/io5";
import { IoMdCloseCircleOutline } from "react-icons/io";

const CountryDropdown = () => {

    const [isOpenModel, setIsOpenModel] = useState(false);

    return (
        <>
            <Button className="countryDrop" onClick={()=>setIsOpenModel(true)}>

                <div className="info">
                    <span className="label">Your Location</span>
                    <span className="name">Sri Lanka</span>
                </div>

                <span className="arrow">
                    <FaAngleDown />
                </span>

            </Button>


            <Dialog open={isOpenModel} className="locationModal">
                <h4 className="mb-0">Choose Your Delivery Location</h4>
                <p>Enter your address and we will specify the offer for your area.</p>
                <Button className="closeCountryList" onClick={()=>setIsOpenModel(false)}><IoMdCloseCircleOutline /></Button>
                <div className="headerSearch w-100">
                    <input type="text" placeholder="Search for area..." />
                    <Button><IoSearchCircleOutline /></Button>
                </div>

                <ul className="countryList mt-3">
                    <li><Button onClick={()=>setIsOpenModel(false)}>Sri Lanka</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>India</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>USA</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>UK</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>Germany</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>France</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>Italy</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>Spain</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>Australia</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>Canada</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>Brazil</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>Japan</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>China</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>South Korea</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>Russia</Button></li>
                </ul>

            </Dialog>
        </>
    );
};

export default CountryDropdown;