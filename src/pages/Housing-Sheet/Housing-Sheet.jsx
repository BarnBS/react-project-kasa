import React from "react";
import { useParams } from "react-router-dom";

import Error404 from "../Error404/Error404";
import logements from "../../logements.json"

function Housing_Sheet () {

    const urlList = []
    for (let i=0; i<logements.length; i++) {
        urlList.push(logements[i].id);
    }

    let urlParameter = useParams();
    
    if (urlList.find(idFromList => idFromList === urlParameter.id)) {
        for (let i=0; i < logements.length; i++) {
            if (logements[i].id === urlParameter.id) {
                
            return <>

                

            </>
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