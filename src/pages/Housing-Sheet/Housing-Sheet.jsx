import React from "react";
import { useParams } from "react-router-dom";

import Error404 from "../Error404/Error404";
import Carrousel from "../../components/Carrousel/Carrousel";
import Tag from "../../components/Tag/Tag";
import Host from "../../components/Host/Host";
import Rating from "../../components/Rating/Rating";

import logements from "../../logements.json"

import "./Housing-Sheet.css"

function Housing_Sheet () {

    let urlList = [];
    for (let i=0; i<logements.length; i++) {
        urlList.push(logements[i].id);
    }

    let urlParameter = useParams();
    
    if (urlList.find(idFromList => idFromList === urlParameter.id)) {
        for (let i=0; i < logements.length; i++) {
            if (logements[i].id === urlParameter.id) {
                
            return <section className="Housing-Sheet">

                <Carrousel images={logements[i].pictures}/>
                <div>
                    <h1>{logements[i].title}</h1>
                    <p className="location">{logements[i].location}</p>
                </div>
                <div className="Tags">
                {
                    logements[i].tags.map( tag => {
                        return <>
                            <Tag tag={tag}/>
                        </>
                    })
                }
                </div>
                <div className="host-and-ratings">
                    <Host host = {logements[i].host.name} profile_picture = {logements[i].host.picture}/>
                    <Rating stars = {logements[i].rating}/>
                </div>

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