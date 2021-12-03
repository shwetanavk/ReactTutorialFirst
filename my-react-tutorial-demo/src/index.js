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

const books = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/81YPgi4vpDL._AC_UY218_.jpg",
    title: "Book Thief",
    author: "Markus Zusak",
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/51Ua3JTN8iS._AC_SX184_.jpg",
    title: "Big Shot Diary of a Wimpy Kid",
    author: "Jeff KinneyJeff Kinney",
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/51f-G2GQwBL._AC_SX184_.jpg",
    title: "Will",
    author: "Will Smith",
  },
  {
    id: 4,
    img: "https://images-na.ssl-images-amazon.com/images/I/51j8IiHZUtL._AC_SX184_.jpg",
    title: "Atomic Habits: An Easy & Proven Way to Build Great Habit ",
    author: "James ClearJames Clear",
  },
];

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

const Book = (props) => {
  //attribut, eventHandler
  //onClick, onMouseOver
  const { img, title, author } = props.book;

  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("adfa");
  };

  const complex = (a) => {
    console.log(a);
  };

  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>-{author}</h4>
      <button type="button" onClick={clickHandler}>
        Click ME!
      </button>
      <button type="button" onClick={() => complex(author)}>
        ComplexWithArgument
      </button>
      {props.children}
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
