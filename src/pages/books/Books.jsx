/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { removeBooks, updateBook } from '../../redux/slice/bookSlice';
import { Link } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const Books = () => {

    const books = useSelector(state => state.books);

    const dispatch = useDispatch();

    return (
        <div>
            <h2 className="text-4xl font-extrabold text-center">All Books</h2>
            <div className="max-w-3xl mx-auto my-5">
                <TableContainer component={Paper}>
                    <Table aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Name</StyledTableCell>
                                <StyledTableCell>Author</StyledTableCell>
                                <StyledTableCell>Price</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                books && books.map((item, indx) => (
                                    <StyledTableRow key={indx}>
                                        <StyledTableCell>
                                            {item.name}
                                        </StyledTableCell>
                                        <StyledTableCell>{item.author}</StyledTableCell>
                                        <StyledTableCell>{item.price}</StyledTableCell>
                                    </StyledTableRow>
                                ))

                            }

                        </TableBody>

                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};

export default Books;