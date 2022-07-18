import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Size, Toppings, Crusts } from "./index";

export const Menu = () => {
    const [ selectedSize, setSelectedSize ] = useState(0);
    const [ selectedcruzt, setSelectedCruzt ] = useState(0);
    const [ selectedToppinz, setSelectedToppinz] = useState([])
    // array destructuring

    const navigate = useNavigate();

    const selectOrderTopping = (selectedToppingId) => {
        // Because we are using checkboxes for toppings we need to
        // decide whether to add or remove a topping id from our selectedToppings state
        // Add it if the user is selecting it, remove it if the user is deselecting it.
        // If the id is already there, then remove it. If it's not there, add it
        let selectedToppingsCopy = [...selectedToppinz]
        if (selectedToppinz.includes(selectedToppingId)) {
          selectedToppingsCopy = selectedToppingsCopy.filter( (toppingId) => toppingId !== selectedToppingId)
          setSelectedToppinz(selectedToppingsCopy)
        } else {
          selectedToppingsCopy.push(selectedToppingId)
          setSelectedToppinz(selectedToppingsCopy)
        }
      }

    return (
    <>
        <h3>We Need to create an Order menu deal</h3>
        <Size selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
        <Crusts props={[selectedcruzt, setSelectedCruzt]} />
        <Toppings selectedToppinz={selectedToppinz} selectOrderTopping={selectOrderTopping} />
    </>
    )
}
