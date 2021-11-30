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
    img: "https://m.media-amazon.com/images/I/81YPgi4vpDL._AC_UY218_.jpg",
    title: "Book Thief",
    author: "Markus Zusak",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/51Ua3JTN8iS._AC_SX184_.jpg",
    title: "Big Shot Diary of a Wimpy Kid",
    author: "Jeff KinneyJeff Kinney",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/51f-G2GQwBL._AC_SX184_.jpg",
    title: "Will",
    author: "Will Smith",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/51j8IiHZUtL._AC_SX184_.jpg",
    title: "Atomic Habits: An Easy & Proven Way to Build Great Habit ",
    author: "James ClearJames Clear",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        console.log(book);
        return <Book book={book} />;
        {
          /* return <Book img={book.img} title={book.title} author={book.author} />; */
        }
      })}
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  console.log(props.book);
  const { img, title, author } = props.book;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>-{author}</h4>

      {props.children}
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
