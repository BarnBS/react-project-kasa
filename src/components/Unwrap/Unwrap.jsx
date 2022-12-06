import unwrap_logo from "./unwrap_logo.png"

import "./Unwrap.css"

function Unwrap (props) {
    const {title, description} = props
    return <div className="unwrap">
        <div className="unwrap-btn">
            <h2>{title}</h2> <img src={unwrap_logo} alt="unwrap-btn" />
        </div>
        <p className="unwrapped-description">
            {description}
        </p>
    </div>
}

export default Unwrap