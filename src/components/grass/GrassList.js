import { useState, useEffect } from "react";
import { API } from "../../constants/api";
import GrassItem from "./GrassItem";
import Heading from "../layout/Heading";


function GrassList() {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    

    useEffect(function () {
        async function fetchData() {
            try {
                const response = await fetch("https://api.pokemontcg.io/v2/cards?q=types:grass");

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
    }, []);

    if (loading) {
        return <div>Loading...We are searching through the grass</div>;
    }

    if (error) {
        return <div>An error occured: {error}</div>;
    }

    return (

    <div class="cards">
            
        {cards.map(function (cards) {
            const { id, name, images, types } = cards;
            return <card className="cards__item"><GrassItem key={id} id={id} name={name} images={images.small} types={types} /> </card>;
        })}</div>
        
        );

}
export default GrassList;