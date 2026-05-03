import Button from "@mui/material/Button"
import { TiThMenuOutline } from "react-icons/ti";



const Navigation = () => {
    return (
        <nav>
            <div className="container">
                <div className="row">
                    <div className="col-sm-3 navPart1">
                        <Button className="allCatTab">
                            <span class="text">ALL CATEGORIES</span>  
                            <span className="icon1"><TiThMenuOutline /></span>                       
                        </Button>
                    </div>

                    <div className="col-sm-9 navPart2">

                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navigation;