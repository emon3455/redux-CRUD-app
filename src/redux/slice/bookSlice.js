import { createSlice } from "@reduxjs/toolkit"

const bookSlice = createSlice({
    name :"books",
    initialState : [
        {id: "1", name: "Emoni", author: "Emon"},
        {id: "2", name: "Uronto Somoy", author: "Elina"},
    ],
    reducers:{
        showBooks: (state)=> state,
        addbooks: (state, action)=>{
            state.books.push(action.payload)
        },
        removeBooks: (state, action)=>{
            state.books = state.books.filter(item=> item.id !== action.payload)
        },
        updateBook: (state, action)=>{
            const {id, name, author} = action.payload
            const isBookExist = state.books.filter(item=> item.id === id)
            if(isBookExist){
                isBookExist[0].name = name
                isBookExist[0].author = author
            }
        }
    }
});

export const {showBooks, addbooks, removeBooks, updateBook} = bookSlice.actions;

export default bookSlice.reducer;