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

//Setup Vars

const bookTitle = "Book Thief";
const author = "Markus Zusak";
const image = "https://m.media-amazon.com/images/I/81YPgi4vpDL._AC_UY218_.jpg";

function BookList() {
  return (
    <section className="booklist">
      <Book title={bookTitle} author={author} image={image}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro
          veritatis ipsum aut placeat, magni autem similique eveniet? Eos,
          voluptatum!
        </p>
      </Book>
      <Book />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.image} alt="" />
      <h1>{props.bookTitle}</h1>
      <h4>-{props.author}</h4>

      {props.children}
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
