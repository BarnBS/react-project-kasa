import React from "react";

import "../../components/Banner/Banner"
import Banner from "../../components/Banner/Banner";
import Gallery from "../../components/Gallery/Gallery";

import "./Home.css"

//Returns Home page with Banner and Gallery components
function Home () {
    return <main>
        <Banner/>
        <Gallery/>
    </main>
}

export default Home