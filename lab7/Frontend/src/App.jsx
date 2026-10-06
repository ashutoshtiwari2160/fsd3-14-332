import Book from "./components/Book";
import Pen from "./components/Pen";
import books from "./data/books" ;
import pens from "./data/pens" ;
import fruit from "./data/fruit" ;
export default function App() {
  return (
    <>
      <h1>Online Book Store</h1>
      <div className="container">
        <Book book={b1} />
        <Book book={b2} />
        <Book book={b1} />
        <Book book={b2} />
        <Pen pens={0} />
        <Pen pens={1} /> 
        <fruit >
      </div>
    </>
  );
}