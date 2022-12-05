import React from "react";

import "../../components/Banner/Banner"
import Banner from "../../components/Banner/Banner";
import Gallery from "../../components/Gallery/Gallery";

import "./Home.css"

function Home () {
    return <main>
        <Banner/>
        <Gallery/>
    </main>
}

export default Home