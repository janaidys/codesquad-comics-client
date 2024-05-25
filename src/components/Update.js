import React from 'react';

const Update = () => {
    return (
      <div className="Update">
         <h1>UPDATE COMIC</h1>
<form className="update-form" action="#">

<div className="comic-forms">
    <div>
        <label htmlFor="title">Title:</label>
        <input type="text" name="title"  id="title" value="title value stored in the database"/>
    </div>


    <div>
        <label htmlFor="author">Author:</label>
        <input type="text" name="author"  id="author" value="author value stored in the database"/>
    </div>
    
<div>
<label htmlFor="publisher-select">Publisher:</label>
<select name="publishers" id="publisher-select">
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
        <input type="text" name="genre"  id="genre" value="genre value stored in the database"/>
    </div>
    

    <div>
        <label htmlFor="pages">Number of Pages:</label>
        <input type="text" name="pages"  id="pages" value="255"/>
    </div>
    

    <div>
        <label htmlFor="rating">Rating</label>
        <input type="text" name="rating"  id="rating" value="5"/>
    </div>
    

    <div>
        <label htmlFor="synopsis">Synopsis:</label>
        <input type="text" name="synopsis"  id="synopsis" value="synopsis value stored in the database"/>
    </div>

</div> 

    <button className="submit-button" type="submit">Submit</button> 




</form>


      </div>
    )
  }

export default Update;