import React from 'react';

const Create = () => {

const handleCreateSubmit = (event) => {
    event.preventDefault();
    console.log("This method ran...")
    console.log(event.title.value)
    console.log(event.author.value)
    console.log(event.publisher.value)
    console.log(event.genre.value)
    console.log(event.pages.value)
    console.log(event.rating.value)
    console.log(event.synopsis.value)

}

    return (
      <div className="Create">
        <h1>CREATE NEW COMIC</h1>
<form action="#" className="new-comic-form" onSubmit= {handleCreateSubmit}>

<div className="comic-forms">
    <div>
        <label htmlFor="title">Title:</label>
        <input type="text" name="title"  id="title" placeholder="Title" required/>
    </div>
    
    <div>
        <label htmlFor="author">Author:</label>
        <input type="text" name="author"  id="author" placeholder="Author" required/>
    </div>
    
    <div>
<label htmlFor="publisher-select">Publisher:</label>
<select required name="publishers" id="publisher-select">
    <option value="select">Select</option>
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
        <input type="text" name="genre"  id="genre" placeholder="Genre" required/>
    </div>
    

    <div>
        <label htmlFor="pages">Number of Pages:</label>
        <input type="text" name="pages"  id="pages" placeholder="Number of Pages" required/>
    </div>
  

    <div>
        <label htmlFor="rating">Rating</label>
        <input type="text" name="rating"  id="rating" placeholder="number (0-5)" required/>
    </div>


    <div>
        <label htmlFor="synopsis">Synopsis:</label>
        <input type="text" name="synopsis"  id="synopsis" placeholder="Synopsis" required/>

        
    </div>

</div> 

    <button className="submit-button" type="submit">Submit</button> 

</form>


      </div>
    )
  }

export default Create;