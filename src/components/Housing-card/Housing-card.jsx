import { Link } from "react-router-dom";
import "./Housing-card.css";

function HousingCard(props) {
    const {title, cover} = props;

        return <Link to='/housing/:id'>
            <div className="Housing-card">
                <img src={cover} alt="" />
                <h2>{title}</h2>
            </div>
        </Link>
}

export default HousingCard