import React, { useEffect, useState } from "react";
import { fetchSizes } from "../data/index";

export const Size = ({ selectedSize, setSelectedSize }) => {
    // need to set up props and pass them through.
const [sizes, setSizes] = useState([])

useEffect(() => {
    fetchSizes().then((arrayOfSizes) => setSizes(arrayOfSizes))
}, [])

    return (
        <div className='menu--list sizes'>
            <h2>Sizes</h2>
            <select
                onChange={
                    (event) => {
                        const intValueOfUserSelection = parseInt(event.target.value)
                        setSelectedSize(intValueOfUserSelection)
                    }
                }

                value={ selectedSize }
            >
            <option value={0}>Select a Size</option>
            {sizes.map(
                (size) => 
                <option id={`size--${size.id}`} key={size.id} value={size.id}>
                    {size.circumference}
                </option>
            )}

            </select>
        </div>
    )
}
