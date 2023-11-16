import React from "react";
import HeaderImage from "./components/HeaderImage";
import HeaderInfo from "./components/HeaderInfo";
import Contact from "./components/Contact";
import MainContent from "./components/MainContent";
import FooterSocials from "./components/Footer";

export default function App(){
    return(
        <div>
            <HeaderImage />
            <HeaderInfo />
            <Contact />
            <MainContent />
            <FooterSocials />
        </div>
    )
}