import { createSlice } from "@reduxjs/toolkit"

const bookSlice = createSlice({
    name: "books",
    initialState : [
        {id: "1", name: "Emoni",price: "100", author: "Emon"},
        {id: "2", name: "Uronto Somoy",price: "200", author: "Elina"},
        {id: "3", name: "Nirob Somoy",price: "50", author: "Ojana"},
    ],
    reducers:{
        showBooks: (state)=> state,
        addbooks: (state, action)=>{
            state.books.push(action.payload)
        },
        removeBooks: (state, action) => {
            console.log(state.books);
            return state.filter(item => item.id !== action.payload)
        },

        updateBook: (state, action) => {
            const { id, name, author, price } = action.payload;
            const index = state.findIndex(item => item.id === id);
            if (index !== -1) {
                state[index].name = name;
                state[index].author = author;
                state[index].price = price;
            }
        }
    }
});

export const {showBooks, addbooks, removeBooks, updateBook} = bookSlice.actions;

export default bookSlice.reducer;