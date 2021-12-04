import React from "react";
import ReactDom from "react-dom";
import { books } from "./books";
import Book from "./Book";
//CSS
import "./index.css";
//Since index.js is the starting point of javascript in the
//applicaition, we add this:

//We capatilize the first letter of the function so react knows
//this is a special type of function and it is a component

//Stateless functional component
//Always return JSX

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} book={book} />;
        //return <Book key={book.id} {...book} ></Book>; //
        {
          /* return <Book img={book.img} title={book.title} author={book.author} />; */
        }
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
