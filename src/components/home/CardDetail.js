import { identity } from "lodash";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { API } from "../../constants/api";

function CardDetail() {
    const [cards, setCards] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    let history = useHistory();

    const { id } = useParams();

    if (!id) {
        history.push("/");
    }

    const url = API + "/" + id;

    useEffect(
        function () {
            async function fetchData() {
                try {
                    const response = await fetch(url);

                    if (response.ok) {
                        const json = await response.json();
                        console.log(json);
                        setCards(json.data);
                    } else {
                        setError("An error occured");
                    }
                } catch (error) {
                    setError(error.toString());
                } finally {
                    setLoading(false);
                }
            }
            fetchData();
        },
        [url]
    );

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>An error occured: {error}</div>;
    }

    return (
       
        <div className="cards__details">
        <img src={cards.images.small} alt="pokesub"></img>
        <h1>{cards.name}</h1>
            <p>Level: {cards.level} <br></br>Type: {cards.types}<br></br> Rarity: {cards.rarity} <br></br> Hp: {cards.hp}</p>
            
        </div>
    );
}

export default CardDetail;