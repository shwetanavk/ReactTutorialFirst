import React from "react";
import ReactDom from "react-dom";

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
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <img
        src="https://m.media-amazon.com/images/I/81YPgi4vpDL._AC_UY218_.jpg"
        alt=""
      />
      <h1>Book Thief</h1>;<h4>Author: Markus Zusak</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
