import React, { useEffect, useState } from "react";
import { fetchCrusts } from "../data/index";
// Need to create a react component that displays a dropdown list of available sizes.

export const Crusts = ({ props }) => {
    // need to set up props and pass them through.
const [crusts, setCrusts] = useState([])
// const [selectedcruzt, setSelectedCruzt] = props

useEffect(() => {
    fetchCrusts().then(setCrusts)
}, [])

    return (
        <div className='menu--list sizes'>
            <h2>Crusts</h2>
            <select
                onChange={
                    (event) => {
                        const intValueOfUserSelection = parseInt(event.target.value)
                        props[1](intValueOfUserSelection)
                        /* this works because bracket notation gives us access to the invoke the function stored 
                         at position 1 in the array where dot notation gives us the value at that location which
                         is not actaully the function?
                         */
                    }
                }

                value={ props.selectedcruzt }
            >
            <option value={0}>Select a Size</option>
            {crusts.map(
                (crust) => 
                <option id={`size--${crust.id}`} key={crust.id} value={crust.id}>
                    {crust.type}
                </option>
            )}

            </select>
        </div>
    )
}
