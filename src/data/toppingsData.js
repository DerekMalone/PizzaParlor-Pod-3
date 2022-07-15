const APIUrl = "http://localhost:8088";

export const fetchToppings = () => {   
    return fetch(`${APIUrl}/toppings`)
    .then(response => response.json())
}