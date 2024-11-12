import React, { useState } from 'react';

const Button = ({ inCart, handleClick }) => {
    const [clicked, setClicked] = useState(false);

    const handleButtonClick = () => {
        handleClick();
        setClicked(true);
        setTimeout(() => setClicked(false), 1000);
    };

    return (
        <button
            onClick={handleButtonClick}
            style={{
                border: clicked ? '2px solid lightblue' : '2px solid black',
                padding: '5px 10px',
                cursor: 'pointer',
                borderRadius: '5px',
                backgroundColor: clicked ? '#d3eaff' : '#4a90e2',
                color: 'white',
                transition: 'background-color 0.3s ease, border 0.3s ease'
            }}
        >
            {clicked ? 'Added to cart' : inCart ? 'In cart' : 'Add to cart'}
        </button>
    );
};

export default Button;