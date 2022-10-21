import React from "react";
import ReactDOM from "react-dom/client";
import {HeaderContainer, FooterContainer} from "./HeadFoot";
import Contenido from "./Contenido";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<>
    <HeaderContainer />
    <Contenido />
    <div className="clearbox"><br/></div>
    <FooterContainer />
</>);
