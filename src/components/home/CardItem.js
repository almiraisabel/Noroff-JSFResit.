import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

function CardItem({ id, name, images }) {
    return (
        <Link to={`/detail${id}`}>
            <img src={images} alt="pokemon" />
            <h2>Pokemon {name}</h2>
            <Button className="cards__btn">Read More</Button>
        </Link>
    );
}



CardItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,

};

export default CardItem;