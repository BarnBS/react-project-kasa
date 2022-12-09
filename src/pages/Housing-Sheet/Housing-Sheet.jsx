import React from "react";
import { useParams } from "react-router-dom";

import Error404 from "../Error404/Error404";
import logements from "../../logements.json"

function Housing_Sheet () {

    const logementsList = Array.from(logements.values());
    const urlList = []
    for (let i=0; i<logementsList.length; i++) {
        urlList.push(logements[i].id);
    }

    let urlParameter = useParams();
    
    for (let i=0; i < urlList[i].length; i++) {
        if (urlList.find(idFromList => idFromList === urlParameter.id)) {

            return <>
                
            </>

        }
        
        return <>
            <Error404/>
        </>
    }
}


export default Housing_Sheet