import React, { useState } from "react";
import { Size, Toppings, Crusts } from "./index";

export const Menu = () => {
    const [ selectedSize, setSelectedSize ] = useState(0);
    const [ selectedcruzt, setSelectedCruzt ] = useState(0);
    const [ selectedToppinz, setSelectedToppinz] = useState([])
    // array destructuring



    return (
    <>
        <h3>We Need to create an Order menu deal</h3>
        <Size selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
        <Crusts props={[selectedcruzt, setSelectedCruzt]} />
        <Toppings selectedToppinz={selectedToppinz} setSelectedToppinz={setSelectedToppinz} />
    </>
    )
}
