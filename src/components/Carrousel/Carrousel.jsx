import { useEffect } from "react";
import {useState} from "react";

import leftBtn from "./left-slide.png";
import rightBtn from "./right-slide.png";

//Carrousel d'images
function Carrousel (props) {

    const {images} = props
    const [counter, setCounter] = useState(0);

    let classNameLeft = "slideBtn";
    let classNameRight = "slideBtn right"

    if (counter === 0){
        classNameLeft = "slideBtn hide"
    }

    if (counter === images.length-1){
        classNameRight = "slideBtn right hide"
    }

    //Incrémente le counter pour changer d'image au carrousel parmis la liste d'images
    function increment() {
        setTimeout(()=> {
            if (counter < images.length-1){
                setCounter(counter + 1);
            }
        }, "500")
    }

    //Décrémente le counter pour changer d'image au carrousel parmis la liste d'images
    function decrement() {
        setTimeout(()=> {
            if (counter > 0){
                return setCounter(counter - 1);
            }
        }, "500")
    }

    useEffect(() => {
        document.querySelector(".slideBtn").addEventListener("click", () => {
            document.querySelector(".imageCarrousel").style.transform = "translateX(1500px)";
            document.querySelector(".imageCarrousel").style.transition = "transform 1000ms";
            document.querySelector(".imageCarrousel").style.opacity = "0.3";
        })

        document.querySelector(".right").addEventListener("click", () => {
            document.querySelector(".imageCarrousel").style.transform = "translateX(-1500px)";
            document.querySelector(".imageCarrousel").style.transition = "transform 1000ms";
            document.querySelector(".imageCarrousel").style.opacity = "0.3";
        })
    });

    return(<>
        <>
            <img onClick = {decrement} className={classNameLeft} src={leftBtn} alt="Button to slide to the left" />
        </>
        <div className="carrousel">
            <img className="imageCarrousel" key={images.indexOf(images[counter])} src={images[counter]} alt="" /> 
        </div>
        <p className="pageNumber">{images.indexOf(images[counter])+1}/{images.length}</p>
        <>
            <img onClick={increment} className={classNameRight} src={rightBtn} alt="Button to slide to the right" />
        </>
    </>
    )
}

export default Carrousel