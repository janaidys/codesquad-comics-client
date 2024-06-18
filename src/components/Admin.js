import React, { useState, useEffect } from "react";
// import booksData from "../data/books";

const Admin = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch(`https://codesquad-comics-rzef.onrender.com/api/comics`)
    .then((response) => response.json())
      .then((result)=>{
        if (result.statusCode === 200) {
          setBooks(result.data)
        }
      })
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    console.log(books)
  }, [books])

  function DeleteBook(bookID) {
      fetch(`https://codesquad-comics-rzef.onrender.com/api/comics/delete/${bookID}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error)=> console.log(error))
  
  }

  return (
    <div className="Admin">
      <h1>ADMIN PAGE</h1>
      <button className="new-button" type="submit">
        ADD A NEW COMIC
      </button>

      <table>
        <thead>
          <tr>
            <th>COMIC TITLE</th>
            <th>EDIT</th>
            <th>DELETE</th>
          </tr>
        </thead>

        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>
                <a href="https://codesquad-comics-rzef.onrender.com/api/comics/update">EDIT</a>
              </td>
              <td>
                <button className="delete-button" type="submit" onClick={DeleteBook}>DELETE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
