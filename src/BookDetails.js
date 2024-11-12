import React from 'react';
import Button from './addbutton';

const BookDetails = ({ book, addToCart }) => {
    return (
        <div>
            <h3>{book.title}</h3>
            <img src={book.img} alt={book.title} style={{
                width: '135px',
                height: '200px'

            }} />
            <p>Author: {book.author}</p>
            <p>Language: {book.lang}</p>
            <p>Pages: {book.pages}</p>
            <p>Price: {book.price}$</p>
            <Button inCart={false} handleClick={() => addToCart(book)} />
        </div>
    );
};

export default BookDetails;
