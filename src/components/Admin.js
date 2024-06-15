import React, { useState, useEffect } from "react";
import booksData from "../data/books";

const Admin = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    setBooks(booksData);
  }, []);

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
                <button className="edit-button" type="submit">
                  EDIT
                </button>
              </td>
              <td>
                <button className="delete-button" type="submit">
                  DELETE
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
