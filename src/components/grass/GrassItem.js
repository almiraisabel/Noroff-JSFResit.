import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function GrassItem({ id, name, images, types }) {
    return (
        <Link to={`/detail${id}`}>
            <img src={images} alt="pokemon" />
            <h2>Pokemon {name}</h2>
            <p>Type: {types}</p>
              <Button className="cards__btn">Read More</Button>
        </Link>
    );
}



GrassItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,

};

export default GrassItem;