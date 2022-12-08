import { useState } from "react";

import unwrap_logo from "./unwrap_logo.png"

import "./Unwrap-btn.css"

// Unwrap the Description by clicking the Title division
function UnwrapBtn (props) {
    const {title, description} = props;

    let className = "description"
    let reverseImg = "reverseImg"

    const [open, setOpen] = useState(false);

    // Change the state to open if closed and closed if open by clicking UnwrapBtn.
    function changeState () {
        setOpen (!open);
    };

    if (!open) {
        className = "description-hidden"
        reverseImg = ""
    }

    return <>
        <div onClick={changeState} className="unwrap-btn">
            <h2>{title}</h2> <img className={reverseImg} src={unwrap_logo} alt="unwrap button" />
        </div>
        <p className={className}>{description}</p>
    </>
}

export default UnwrapBtn