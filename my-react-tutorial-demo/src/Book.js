import React from "react";

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

export default Book;
