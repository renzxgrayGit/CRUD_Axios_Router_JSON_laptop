import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const Read = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get('http://localhost:3000/users/' + id)
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
    <div>
      <div>
        <h3>Detail of User</h3>
        <div>
          <strong>Name: {data.name}</strong>
        </div>
        <div>
          <strong>Email: {data.email}</strong>
        </div>
        <div>
          <strong>Phone: {data.phone}</strong>
        </div>
        <Link to={`/update/${id}`}>Edit</Link>
        <Link to="/">Back</Link>
      </div>
    </div>
  )
}

export default Read