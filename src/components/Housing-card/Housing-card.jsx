import { Link } from "react-router-dom";

//Returns a clickable card with an image and a title
function HousingCard(props) {

    const {id, title, cover} = props;

    return <Link to={`/housing/${id}`}>
        <div className="Housing-card">
            <img src={cover} alt="" />
            <h2>{title}</h2>
        </div>
    </Link>
}

export default HousingCard