const APIUrl = "http://localhost:8088";

export const fetchCrusts = () => {
    return fetch(`${APIUrl}/crusts`)
    .then(response => response.json())
}