import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import booksData from "../data/books";


const Update = (bookID) => {
    const navigate = useNavigate();

    const { bookId } = useParams();
    const [book, setBook] = useState([]);
    useEffect(() => {
        fetch(`https://codesquad-comics-rzef.onrender.com/api/comics/${bookID}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => setBook(result.data))
      .catch((error)=> console.log(error))
    }, []);

    const handleUpdateSubmit = (event) => {
        event.preventDefault();
        console.log("This method ran...")
        const body = {
            title: event.target.title.value,
            author: event.target.author.value, 
            publish: event.target.publish.value, 
            genre: event.target.genre.value, 
            pages: event.target.pages.value, 
            rating: event.target.pages.value, 
            synopsis: event.target.pages.value
          }
          fetch(`https://codesquad-comics-rzef.onrender.com/api/comics/update/${bookID}`, {
            method: "PUT",
            body: JSON.stringify
          })
            .then((response) => response.json())
            .then((result) => console.log(result), navigate("/admin"))
            .catch((error)=> console.log(error))
    }


    return (
      <div className="Update">
         <h1>UPDATE COMIC</h1>
<form className="update-form" action="#" onSubmit={handleUpdateSubmit}>

<div className="comic-forms">
    <div>
        <label htmlFor="title">Title:</label>
        <input type="text" name="title"  id="title" value="title value stored in the database" required/>
    </div>


    <div>
        <label htmlFor="author">Author:</label>
        <input type="text" name="author"  id="author" value="author value stored in the database" required/>
    </div>
    
<div>
<label htmlFor="publisher-select">Publisher:</label>
<select name="publishers" id="publisher-select" required>
    <option value="">publisher value stored in the database</option>
    <option value="boom">BOOM! Box</option>
    <option value="dc">DC Comics</option>
    <option value="abrams">Henry N. Abrams</option>
    <option value="icon">Icon Books</option>
    <option value="image">Image Comics</option>
    <option value="marvel">Marvel</option>
    <option value="s and s">Simon & Schuster</option>
    <option value="tsp">Top Shelf Productions</option>
    <option value="viz">Viz Media LLC</option>
</select> 
</div>


    <div>
        <label htmlFor="genre">Genre:</label>
        <input type="text" name="genre"  id="genre" value="genre value stored in the database" required/>
    </div>
    

    <div>
        <label htmlFor="pages">Number of Pages:</label>
        <input type="text" name="pages"  id="pages" value="255" required/>
    </div>
    

    <div>
        <label htmlFor="rating">Rating</label>
        <input type="text" name="rating"  id="rating" value="5" required/>
    </div>
    

    <div>
        <label htmlFor="synopsis">Synopsis:</label>
        <input type="text" name="synopsis"  id="synopsis" value="synopsis value stored in the database" required/>
    </div>

</div> 

    <button className="submit-button" type="submit">Submit</button> 




</form>


      </div>
    )
}

export default Update;