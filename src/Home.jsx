import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, [])

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Would you like to Delete?");
    if (confirmDelete) {
      axios.delete(`http://localhost:3000/users/${id}`)
        .then(() => {
          setData(data.filter(user => user.id !== id)); // Update the state after deleting
        })
        .catch(err => console.log(err));
    }
  }

  return (
    <div className=''>
      <h1>List of Users</h1>
      <div>
        <div>
          <Link to="/create">Add</Link>
        </div>
        <table>
          <thead>
            <tr>
              {/*  <th>ID</th> */}
              <th>Name</th>
              <th>Username</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((data, index) => (
                <tr key={index}>
                  {/*  <td>{data.id}</td> */}
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                  <td>
                    <Link to={`/read/${data.id}`}>Read</Link>
                    <Link to={`/update/${data.id}`}>Edit</Link>
                    <button onClick={e => handleDelete(data.id)}>Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home