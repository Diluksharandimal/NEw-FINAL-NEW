import React from "react";

import NavbarD from "../NavbarD/NavbarD";
import Top from "../Top/top";
import FeaturesD from "../Features/Features";
import CampaignsD from "../Campaigns/Campaigns";
import BcardD from "../Bcard/Bcard";
import AttractD from "../Attract/Attract";
import Footer from "../../Footer/footer";



const Navigate=()=>{
    
    return(
        <div>
            <NavbarD/>
            <Top/>
            <FeaturesD/>
            <CampaignsD/>
            <AttractD/>
            <BcardD/>
            <Footer/>
            
        </div>
    )
}

export default Navigate;