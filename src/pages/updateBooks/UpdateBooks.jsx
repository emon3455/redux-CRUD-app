/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { Button } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateBook } from '../../redux/slice/bookSlice';
import { v4 as uuidv4 } from 'uuid';

const UpdateBooks = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const book = useSelector(state=> state.books.find(item=> item.id === id))

    const [updatedBookData, setBook] = useState({
        name: book.name,
        author: book.author,
        price: book.price,
    })

    const dispatch = useDispatch();

    const handleUpdate = (e) => {
        e.preventDefault();
        const name = updatedBookData.name;
        const author = updatedBookData.author;
        const price = updatedBookData.price;
        const newBook = {
            id,
            name,
            author,
            price,
        }
        dispatch(updateBook(newBook));
        navigate("/books")
    }

    return (
        <div>
            <form className='max-w-xl mx-auto shadow-2xl my-16'>
                <h2 className='text-xl font-bold text-center'>Updating: {updatedBookData.name}</h2>
                <div className="flex flex-col p-2">
                    <label htmlFor="name">Name:</label>
                    <input
                        onChange={(e) => setBook({
                            ...updatedBookData,
                            name: e.target.value
                        })}
                        type="text" name='name' defaultValue={updatedBookData.name} className='p-2 border border-violet-400 rounded-lg' />
                </div>
                <div className="flex flex-col p-2">
                    <label htmlFor="author">Author Name:</label>
                    <input
                        onChange={(e) => setBook({
                            ...updatedBookData,
                            author: e.target.value
                        })}
                        type="text" name='author' defaultValue={updatedBookData.author} className='p-2 border border-red-400 rounded-lg' />
                </div>
                <div className="flex flex-col p-2">
                    <label htmlFor="price">Price:</label>
                    <input
                        onChange={(e) => setBook({
                            ...updatedBookData,
                            price: e.target.value
                        })}
                        type="text" name='author' defaultValue={updatedBookData.price} className='p-2 border border-red-400 rounded-lg' />
                </div>
                <div className="p-2">
                    <Button onClick={handleUpdate} type='submit' variant="contained">
                        Update
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default UpdateBooks;