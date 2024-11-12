import './App.css';
import BookDetails from './BookDetails';
import Cart from './Cart';
import { useState } from 'react';
import { books } from './booksData';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    const existingBook = cart.find(item => item.title === book.title);
    if (existingBook) {
      setCart(cart.map(item =>
        item.title === book.title ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...book, quantity: 1 }]);
    }
  };

  const removeFromCart = (book) => {
    const existingBook = cart.find(item => item.title === book.title);
    if (existingBook.quantity > 1) {
      setCart(cart.map(item =>
        item.title === book.title ? { ...item, quantity: item.quantity - 1 } : item
      ));
    } else {
      setCart(cart.filter(item => item.title !== book.title));
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Welcome to react book store</h1>
      </header>
      <main>
        <section className='books'>
          <h2>Available titles</h2>
          <section className='booksDescription'>
            {books.map((book, index) => (
              <BookDetails key={index} book={book} addToCart={addToCart} />
            ))}
          </section>
        </section>
        <section className='cart'>
          <h2>Cart</h2>
          <Cart cart={cart} removeFromCart={removeFromCart} />
        </section>
      </main>
      <footer>
        <p>&copy; 2024 React Book Store</p>
      </footer>
    </div>
  );
}

export default App;
