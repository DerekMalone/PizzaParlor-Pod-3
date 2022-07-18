const APIUrl = "http://localhost:8088";

export const fetchSizes = () => {
    return fetch(`${APIUrl}/sizes`)
    .then(response => response.json())
}