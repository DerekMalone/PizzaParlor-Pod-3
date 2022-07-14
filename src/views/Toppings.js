import { useEffect, useState } from 'react';
import '../styles/index.css';
import '../styles/footer.css'

export const Toppings = () => {
    const APIUrl = "http://localhost:8088";

    const [toppings, setToppings] = useState([]);
  
    useEffect(() => { 
      fetch(`${APIUrl}/toppings`)
        .then(response => response.json())
        .then(data => setToppings(data))
     }, [])
  
     const callOnMe = () => {
      setToppings([{name: "a new topping", id: 1}, {name: "another new topping", id: 2}])
     }
  
    return (
<div className="App">
{/* <h1>Momma Leoni's Pizza Parlor</h1>
<div>We make only the freshest pies in the tri-state area</div> */}
<h3>Toppings:</h3>
<ul>
  {
    toppings.map(topping => {
      return <li key={topping.id}>{topping.name}</li>
    })
  }
</ul>
<button type='button' onClick={callOnMe}>Change it Up</button>   
{/* <Footer /> */}
</div>

    )
}