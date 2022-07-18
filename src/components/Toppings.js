import { useEffect, useState } from 'react';
import '../styles/index.css';
import '../styles/footer.css'
import '../styles/Toppings.css'
// import { fetchToppings } from '../data/toppingsData';
import { fetchToppings } from '../data/index';

export const Toppings = ({ selectOrderTopping, selectedToppinz }) => {
// need to pass through props for use in this component.

  const [toppings, setToppings] = useState([]);
  // const [number, updateNumber] = useState(0);
      // array destructuring ^
    
    useEffect(() => { 
      fetchToppings().then(setToppings) // this is the same as below.
      // fetch(`${APIUrl}/toppings`)
      // .then(response => response.json())
      // .then(data => setToppings(data))
      // console.warn("Use Effect 1")
    }, []) // the [] are called a dependency array
  
    /*  
    useEffect(() => {
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
  
    return (
<div className="menu--list toppings">
<h3>Toppings:</h3>
<div className='toppings--items'>
  {
    toppings.map(topping => 
       <label htmlFor={`topping--${topping.id}`} key={topping.id}>
        <input type="checkbox" id={`topping--${topping.id}`} onChange={() => selectOrderTopping(topping.id)}
          checked={selectedToppinz.includes(topping.id) ? true : false} 
        />
        {topping.name}
      </label>
    )}
  </div>
</div>
    )
}
