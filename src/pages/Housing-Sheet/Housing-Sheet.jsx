import React from "react";
import { useParams } from "react-router-dom";

import Error404 from "../Error404/Error404";
import Carrousel from "../../components/Carrousel/Carrousel";

import logements from "../../logements.json"

import "./Housing-Sheet.css"

function Housing_Sheet () {

    const urlList = []
    for (let i=0; i<logements.length; i++) {
        urlList.push(logements[i].id);
    }

    let urlParameter = useParams();
    
    if (urlList.find(idFromList => idFromList === urlParameter.id)) {
        for (let i=0; i < logements.length; i++) {
            if (logements[i].id === urlParameter.id) {
                
            return <section className="Housing-Sheet">

                <Carrousel images={logements[i].pictures}/>
                <h1>{logements[i].title}</h1>

            </section>
            }
        }     
    }
    else {
        return <>
            <Error404/>
        </>
    }
}


export default Housing_Sheet