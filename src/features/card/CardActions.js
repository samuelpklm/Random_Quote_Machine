import { EstablecerMensaje, EstablerCarga, EstablerNumeroAleatorio } from "./CardSlice";

export const fetchData = () => {
    return async(dispatch) => {

        const fetchHandler = async() => {
            const res = await fetch('https://type.fit/api/quotes');
            const data = await res.json();
            return data;
        }
        try {
            const cardData = await fetchHandler();
            dispatch(EstablecerMensaje(cardData));
            dispatch(EstablerCarga());
        } catch(err){
            alert("Al parecer no hay internet");
        }
    }
}

// fetch("https://type.fit/api/quotes")
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {
//     console.log(data);
//   });