import React from 'react';

const Admin = () => {
    return (
      <div className="Admin">
        <h1>ADMIN PAGE</h1>
        <button className="new-button" type="submit">ADD A NEW COMIC</button>
     
<table>
    <thead>  
        <tr>
            <th>COMIC TITLE</th>
            <th>EDIT</th>
            <th>DELETE</th>
        </tr>
    </thead>

<tbody>
<tr>
    <td>Batman: The Dark Knight Returns</td>
    <td><button className="edit-button" type="submit">EDIT</button></td>
    <td><button className="delete-button" type="submit">DELETE</button></td>
</tr>
<tr>
    <td>Black Panther: A Nation Under Our Feet Book 1 </td>
    <td><button className="edit-button" type="submit">EDIT</button></td>
    <td><button className="delete-button" type="submit">DELETE</button></td>
</tr>
<tr>
    <td>Fun Home: A Family Tragicomic</td>
    <td><button className="edit-button" type="submit">EDIT</button></td>
    <td><button className="delete-button" type="submit">DELETE</button></td>
</tr>
<tr>
    <td>Hunter X Hunter Vol. 1</td>
    <td><button className="edit-button" type="submit">EDIT</button></td>
    <td><button className="delete-button" type="submit">DELETE</button></td>
</tr>
<tr>
    <td>Lumberjanes Vol. 1</td>
    <td><button className="edit-button" type="submit">EDIT</button></td>
    <td><button className="delete-button" type="submit">DELETE</button></td>
</tr>
<tr>
    <td>March: Book One</td>
    <td><button className="edit-button" type="submit">EDIT</button></td>
    <td><button className="delete-button" type="submit">DELETE</button></td>
</tr>
<tr>
    <td>One Piece, Vol. 1: Romance Dawn</td>
    <td><button className="edit-button" type="submit">EDIT</button></td>
    <td><button className="delete-button" type="submit">DELETE</button></td>
</tr>
<tr>
    <td>Parable of the Sower</td>
    <td><button className="edit-button" type="submit">EDIT</button></td>
    <td><button className="delete-button" type="submit">DELETE</button></td>
</tr>
<tr>
    <td>Queer: A Graphic History</td>
    <td><button className="edit-button" type="submit">EDIT</button></td>
    <td><button className="delete-button" type="submit">DELETE</button></td>
</tr>
<tr>
    <td>The Walking Dead, Vol. 1: Days Gone Bye</td>
    <td><button className="edit-button" type="submit">EDIT</button></td>
    <td><button className="delete-button" type="submit">DELETE</button></td>
</tr>
<tr>
    <td>Wake: The Hidden History of Women-Led Slave Revolts</td>
    <td><button className="edit-button" type="submit">EDIT</button></td>
    <td><button className="delete-button" type="submit">DELETE</button></td>
</tr>
<tr>
    <td>Watchmen</td>
    <td><button className="edit-button" type="submit">EDIT</button></td>
    <td><button className="delete-button" type="submit">DELETE</button></td>
</tr>
</tbody>
</table>
      </div>
    )
  }

export default Admin;