import { createSlice } from "@reduxjs/toolkit";
import { red, pink, purple, deepPurple, indigo, blue, lightBlue, cyan, teal, 
    green, lightGreen, lime, yellow, amber, orange
  , deepOrange, brown, grey, blueGrey
  } from '@mui/material/colors';

const dark = [300, 400, 500, 600, 700, 800, 900];

const colores = [red, pink, purple, deepPurple, indigo, blue, lightBlue, cyan, teal, 
    green, lightGreen, lime, yellow, amber, orange
  , deepOrange, brown, grey, blueGrey];

const initialState = {
    value: [],
    frase: 'Preciona New Mensaje!',
    author: 'Samuel Rodríguez',
    aleatorio: 0,
    carga: false,
    color: (colores[Math.floor(Math.random() * colores.length)])[dark[Math.floor(Math.random() * dark.length)]],
};

export const cardSlice = createSlice({
    name: 'mensaje',
    initialState,
    reducers: {
        EstablecerMensaje: (state, action) => {
            state.value = action.payload;
            state.aleatorio = Math.floor(Math.random() *  state.value.length);
        },
        EstablerNumeroAleatorio: (state) => {
            state.aleatorio = Math.floor(Math.random() *  state.value.length);
            state.frase =  state.value[state.aleatorio].text;
            state.author =  state.value[state.aleatorio].author;
            state.color = (colores[Math.floor(Math.random() * colores.length)])[dark[Math.floor(Math.random() * dark.length)]];
        },
        EstablerCarga: (state) => {
            state.carga = true;
        },
    },
});

export const { EstablecerMensaje, EstablerNumeroAleatorio, EstablerCarga } = cardSlice.actions;

export const selectMensaje = (state) => state.mensaje.frase;
export const selectAuthor = (state) => state.mensaje.author;
export const selectColor = (state) => state.mensaje.color;
export const selectCarga = (state) => state.mensaje.carga;

export default cardSlice.reducer;
