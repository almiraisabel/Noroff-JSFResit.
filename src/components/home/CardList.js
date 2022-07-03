import { useState, useEffect } from "react";
import { API } from "../../constants/api";
import CardItem from "./CardItem";
import Heading from "../layout/Heading";


function CardList() {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    

    useEffect(function () {
        async function fetchData() {
            try {
                const response = await fetch(API);

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
        return <div>Loading..."The world's greatest Pokémon Master is waiting for me!"</div>;
    }

    if (error) {
        return <div>An error occured: {error}</div>;
    }

    return (

    <div class="cards">

            
        {cards.map(function (cards) {
            const { id, name, images, } = cards;
            return <card class="cards__item"><CardItem key={id} id={id} name={name} images={images.small} /> </card>;
        })}</div>
        
        );

}



export default CardList;