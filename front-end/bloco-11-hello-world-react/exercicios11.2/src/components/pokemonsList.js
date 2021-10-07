import React from "react";
import Pokemon from "./pokemon";

class Pokedex extends React.Component {
    render() {
        return (
            <ol>
                <li>{Pokemon}</li>
            </ol>
        )
    }
}

export default Pokedex;