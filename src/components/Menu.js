import React, { useState } from "react";
import { Size } from "./Size";
import { Toppings } from "./Toppings";

export const Menu = () => {
    const [ size, setSize ] = useState(0);
    const [ cruzt, setCruzt ] = useState(0);
    const [ toppinz, setToppinz] = useState([])
    // array destructuring

    return (
    <>
        <h3>We Need to create an Order menu deal</h3>
        <Size />
        <Toppings />
    </>
    )
}