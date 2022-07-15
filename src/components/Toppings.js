import { useEffect, useState } from 'react';
import '../styles/index.css';
import '../styles/footer.css'
// import { fetchToppings } from '../data/toppingsData';
import { fetchToppings } from '../data/index';

export const Toppings = () => {
    // const APIUrl = "http://localhost:8088";

    const [toppings, setToppings] = useState([]);
    // const [number, updateNumber] = useState(0);
    
    useEffect(() => { 
      fetchToppings().then(setToppings)
      // fetch(`${APIUrl}/toppings`)
      // .then(response => response.json())
      // .then(data => setToppings(data))
      // console.warn("Use Effect 1")
    }, []) // the [] are called a dependency array
    
/*    useEffect(() => {
        //this is an anonymous function (aka a lambda)
        //this function runs when state is changed.
        //We insert the code we want to run on a state change here.
      console.warn("Use Effect 2")
      updateNumber(1);
    }, [toppings]) // the dependcy array is what is listening for state to change. 
          // when state changes it triggers that specific useEffect to run.

    useEffect(() => {
      console.warn("useEffect 3", number)
    }, [number])
*/
    
     const callOnMe = () => {
      setToppings([{name: "a new topping", id: 1}, {name: "another new topping", id: 2}])
     }
  
    return (
<div className="App">
<h3>Toppings:</h3>
<ul>
  {
    toppings.map(topping => {
      return <li key={topping.id}>{topping.name}</li>
    })
  }
</ul>
<button type='button' onClick={callOnMe}>Change it Up</button>
</div>
    )
}
