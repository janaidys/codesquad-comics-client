import React from 'react';

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
  

  <div className="comic-collection">
    <h2>COMPLETE COMIC COLLECTION</h2>
  <div className="comic-covers">

    <div className="individual-comics">
    <a href="#"
      ><img src="public/images/fun-home.jpg" alt="fun home cover" width="200px"
    /></a>
    <p>
      <em>Fun Home: A Family Tragicomic</em>
      by Alison Bechdel
      <br/>
      5 stars
      <br/>
      {/* <!--Clicking this link will take you to further details about the comic --> */}
      <a  href="#">Details</a>
    </p>
  </div>
    <br />

    <div className="individual-comics">
    <a href="#"
      ><img src="public/images/watchmen.jpg" alt="watchman cover" width="200px"
    /></a>
    <p>
      <em>Watchman</em>
      by Alan Moore
      
      5 stars
      
      {/* <!--Clicking this link will take you to further details about the comic --> */}
      <a href="#">Details</a>
    </p>
  </div>
    

    <div className="individual-comics">
    <a href="#"
      ><img
        src="public/images/hunter-x-hunter.jpg"
        alt="hunter-x-hunter cover"
        width="200px"
    /></a>
    <p>
      <em>Hunter X Hunter Vol. 1</em>
      by Yoshihiro Togashi
      <br />
      5 stars
      <br />
      {/* <!--Clicking this link will take you to further details about the comic --> */}
      <a href="#">Details</a>
    </p>
  </div>
    <br />

    <div className="individual-comics">
    <a href="#"
      ><img
        src="public/images/lumberjanes.jpg"
        alt="lumberjanes cover"
        width="200px"
    /></a>
    <p>
      <em>Lumberjanes Vol. 1</em>
      by Noelle Stevenson
      <br />
      4 stars
      <br />
      {/* <!--Clicking this link will take you to further details about the comic --> */}
      <a href="#">Details</a>
    </p>
  </div>
    <br />

    <div className="individual-comics">
    <a href="#"
      ><img src="public/images/one-piece.jpg" alt="one-piece cover" width="200px"
    /></a>
    <p>
      <em>One Piece Vol. 1: Romance Dawn</em>
      by Eiichiro Oda
      <br />
      5 stars
      <br />
      {/* <!--Clicking this link will take you to further details about the comic --> */}
      <a href="#">Details</a>
    </p>
  </div>
    <br />

    <div className="individual-comics">
    <a href="#"
      ><img src="public/images/wake.jpg" alt="wake cover" width="200px"
    /></a>
    <p>
      <em>Wake: The Hidden Story of Women-Led Slave Revolts</em>
      by Rebecca Hall
      <br />
      4 stars
      <br />
      {/* <!--Clicking this link will take you to further details about the comic --> */}
      <a href="#">Details</a>
    </p>
  </div>
    <br />

    <div className="individual-comics">
    <a href="#"
      ><img
        src="public/images/black-panther.jpg"
        alt="black panther cover"
        width="200px"
    /></a>
    <p>
      <em>Black Panther: A Nation Under Our Feet Book 1</em>
      by Ta-Nehisi Coates
      <br />
      3 stars
      <br />
      {/* <!--Clicking this link will take you to further details about the comic --> */}
      <a href="#">Details</a>
    </p>
  </div>
    <br />
  
    <div className="individual-comics">
    <a href="#"
      ><img
        src="public/images/the-walking-dead.jpg"
        alt="the the-walking-dead cover"
        width="200px"
    /></a>
    <p>
      <em>The Walking Dead, Vol. 1: Days Gone Bye</em>
      by Robert Kirkman
      <br />
      4 stars
      <br />
      {/* <!--Clicking this link will take you to further details about the comic --> */}
      <a href="#">Details</a>
    </p>
  </div>
    <br />

    <div className="individual-comics">
    <a href="#"
      ><img src="public/images/march.jpg" alt="march cover" width="200px"
    /></a>
    <p>
      <em>March: Book One</em>
      by John Lewis
      <br />
      5 stars
      <br />
      {/* <!--Clicking this link will take you to further details about the comic --> */}
      <a href="#">Details</a>
    </p>
  </div>
    <br />

    <div className="individual-comics">
    <a href="#"
      ><img src="public/images/batman.jpg" alt="batman cover" width="200px"
    /></a>
    <p>
      <em>Batman: The Dark Knight Returns</em>
      by Frank Miller
      <br />
      3 stars
      <br />
      {/* <!--Clicking this link will take you to further details about the comic --> */}
      <a href="#">Details</a>
    </p>
  </div>
    <br />

    <div className="individual-comics">
    <a href="#"
      ><img src="public/images/queer.jpg" alt="queer cover" width="200px"
    /></a>
    <p>
      <em>Queer: A Graphic History</em>
      by Meg-John Barker
      <br />
      4 stars
      <br />
      {/* <!--Clicking this link will take you to further details about the comic --> */}
      <a href="#">Details</a>
    </p>
  </div>
    <br />

    <div className="individual-comics">
    <a href="#"
      ><img
        src="public/images/parable-of-the-sower.jpg"
        alt="parable-of-the-sower cover"
        width="200px"
    /></a>
    <p>
      <em>Parable of the Sower</em>
      by Octavia E. Butler
      <br />
      4 stars
      <br />
      {/* <!--Clicking this link will take you to further details about the comic --> */}
      <a href="#">Details</a>
    </p>
  </div>
  

</div>  

<button class="more-button"  type="submit">DISPLAY MORE</button>
  </div>
  
</div>

    )
  }

export default Home;