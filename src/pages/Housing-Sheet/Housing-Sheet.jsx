import React from "react";
import { useParams } from "react-router-dom";

import Error404 from "../Error404/Error404";
import Carrousel from "../../components/Carrousel/Carrousel";
import HousingTitle from "../../components/Housing-title/Housing-title";
import Tag from "../../components/Tag/Tag";
import Host from "../../components/Host/Host";
import Rating from "../../components/Rating/Rating";
import UnwrapBtn from "../../components/Unwrap-btn/Unwrap-btn";

import logements from "../../logements.json"

import "./Housing-Sheet.css"

//Returns a list of every housing id
function listHousingIds() {
    let urlList = [];
    for (let i=0; i<logements.length; i++) {
        urlList.push(logements[i].id);
    }
    return urlList;
}

// return the housing at Integer "index" from the "logements" datas
function housing(index) {
    return logements[index]
}

//Returns a page-component that display every component of a housing
function Housing_Sheet () {

    let urlParameter = useParams(); //Get the id of the housing from the url
    
    //If the id in the url doesn't match an id from the list of Ids then return Error404, else display the housing corresponding the id
    if (listHousingIds().find(idFromList => idFromList === urlParameter.id)) {
        for (let i=0; i < logements.length; i++) {
            if (housing(i).id === urlParameter.id) {
                
            return <section className="Housing-Sheet">

                <Carrousel images={housing(i).pictures}/>
                <HousingTitle title = {housing(i).title} location = {housing(i).location}/> 
                <div className="tags">
                {
                    housing(i).tags.map( tag => {
                        return <>
                            <Tag tag={tag}/>
                        </>
                    })
                }
                </div>
                <div className="host-and-ratings">
                    <Host host = {housing(i).host.name} profile_picture = {housing(i).host.picture}/>
                    <Rating rating = {housing(i).rating}/>
                </div>
                <div className="unwrap-btns">
                    <UnwrapBtn title="Description" description={housing(i).description}/>
                    <UnwrapBtn title="Equipements" description={housing(i).equipments.map(equipement => {
                        return <>
                            <ul>
                                {equipement}
                            </ul>
                        </>
                    })}/>
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