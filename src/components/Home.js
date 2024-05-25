import React from 'react';
import booksData from "../data/books";



const Home = () => {
    return (
      <div className="Home">
        <h1>CODESQUAD COMICS</h1>
    <p>
      CodeSquad Comics is a collection of graphic novels read by Anaidys
      Jimenez. The site is intended to display comic book covers along with
      information about each book, including the author, a rating, and other
      details about the graphic novel. Browse through the complete collection
      below. Click on the cover image or the Details link to see even more
      information about each graphic novel including the publisher, genre,
      number of pages, and a brief synopsis. The About page includes meta
      information about this collection. Login is only available to the site
      administrator at this time.
    </p>
  

  <span className="comic-collection">
    <h2>COMPLETE COMIC COLLECTION</h2>
  <span className="comic-covers">

  
  {booksData.map((book) => 
  <div className="individual-comics">
  <a href="#"
  ><img src={`./images/${book.image}`} alt="fun home cover" width="200px"
/></a>
<p>
  <em>{book.title}</em>
  <br/>
  by {book.author}
  <br/>
  {book.rating} stars
  <br/>
  <a  href="#">Details</a>
</p>
</div> 
)}
    

<button className="more-button"  type="submit">DISPLAY MORE</button>
  
</span>
</span>
</div>

    )
  }

export default Home;