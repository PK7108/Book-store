import './App.css';
import BookDetails from './BookDetails';
import Cart from './Cart';
import { useState } from 'react';

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

  const book1 = {
    title: 'Don Kichote',
    img: '/images/DonKichote.jpg',
    author: 'Miguel de Cervantes',
    lang: 'Polish',
    pages: '484',
    price: 15 // Cena książki w dolarach
  };
  const book2 = {
    title: 'Getting Things Done',
    img: '/images/GTD.jpg',
    author: 'David Allen',
    lang: 'English',
    pages: '271',
    price: 42 // Cena książki w dolarach
  };
  const book3 = {
    title: 'Menagerial Moment of Truth',
    img: '/images/MMOT.jpg',
    author: 'Bruce Bodaken and Robert Fritz',
    lang: 'English',
    pages: '249',
    price: 36 // Cena książki w dolarach
  };

  const book4 = {
    title: 'Misja',
    img: '/images/Misja.jpg',
    author: 'Michel Desmarquet',
    lang: 'Polish',
    pages: '210',
    price: 39.90 // Cena książki w dolarach
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
            <BookDetails book={book1} addToCart={addToCart} />
            <BookDetails book={book2} addToCart={addToCart} />
            <BookDetails book={book3} addToCart={addToCart} />
            <BookDetails book={book4} addToCart={addToCart} />
          </section>
        </section>
        <section className='cart'>
          <h2>Cart</h2>
          <Cart cart={cart} removeFromCart={removeFromCart} />
        </section>
      </main>
      <footer>
        <p>&copy; 2023 React Book Store</p>
      </footer>
    </div>
  );
}

export default App;