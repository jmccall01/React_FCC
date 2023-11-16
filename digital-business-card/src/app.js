import React from "react";
import HeaderImage from "./components/HeaderImage"
import HeaderInfo from "./components/HeaderInfo"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"

export default function App(){
    return(
        <div>
            <HeaderImage />
            <HeaderInfo />
            <MainContent />
            <Footer />
        </div>
    )
}