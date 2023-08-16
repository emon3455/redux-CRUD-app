import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { addbooks } from "../../redux/slice/bookSlice";
import { useDispatch } from "react-redux";

const AddBooks = () => {

    const navigate = useNavigate();
    const [book, setBook] = useState({
        name: "",
        author: "",
        price: "",
    })
    const dispatch = useDispatch();

    const handleAdd = (e)=>{
        e.preventDefault();
        const name = book.name;
        const author = book.author;
        const price = book.price;
        const newBook = {
            id: uuidv4(),
            name,
            author,
            price,
        }
        dispatch(addbooks(newBook));
        navigate("/books")
    }

    return (
        <div>
            <form className='max-w-xl mx-auto shadow-2xl my-16'>
                <h2 className='text-xl font-bold text-center'>Add New Book</h2>
                <div className="flex flex-col p-2">
                    <label htmlFor="name">Name:</label>
                    <input
                        onChange={(e) => setBook({
                            ...book,
                            name: e.target.value
                        })}
                        type="text" name='name' className='p-2 border border-violet-400 rounded-lg' />
                </div>
                <div className="flex flex-col p-2">
                    <label htmlFor="author">Author Name:</label>
                    <input
                        onChange={(e) => setBook({
                            ...book,
                            author: e.target.value
                        })}
                        type="text" name='author' className='p-2 border border-red-400 rounded-lg' />
                </div>
                <div className="flex flex-col p-2">
                    <label htmlFor="price">Price:</label>
                    <input
                        onChange={(e) => setBook({
                            ...book,
                            price: e.target.value
                        })}
                        type="text" name='author' className='p-2 border border-green-400 rounded-lg' />
                </div>
                <div className="p-2">
                    <Button onClick={handleAdd} type='submit' variant="contained">
                        Add Book
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default AddBooks;