import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
    const total = cart.reduce((sum, book) => sum + book.price * book.quantity, 0).toFixed(2);

    return (
        <div>
            {cart.map((book, index) => (
                <div key={index}>
                    <h3>{book.title}</h3>
                    <p>Number of pieces: {book.quantity}</p>
                    <p>Price:{(book.price * book.quantity).toFixed(2)}$</p>
                    <button onClick={() => {
                        removeFromCart(book)
                    }
                    }>Remove</button>
                </div>
            ))}
            {cart.length > 0 && <h3>Total: {total}$</h3>}
        </div>
    );
};

export default Cart;