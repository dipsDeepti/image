import React from "react";
import "./header.css";

const Header  = function (props){
        return(
            <div>
                <header className="app-header">
                    {props.heading}
                </header>
            </div>
        )
}

export default Header;