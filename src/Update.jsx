import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const Update = () => {
  /* const [data, setData] = useState([]); */
  const { id } = useParams();

  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const navigate = useNavigate();
  useEffect(() => {
    axios.get('http://localhost:3000/users/' + id)
      .then(res => {
        setValues(res.data);
      })
      .catch(err => console.log(err));
  }, [])

  const handleUpdate = (event) => {
    event.preventDefault();
    axios.put('http://localhost:3000/users/' + id, values)
      .then(res => {
        console.log(res);
        navigate('/')
      })
      .catch(err => console.log(err));
  }

  return (
    <div>
      <div>
        <h1>Update User</h1>
        <form onSubmit={handleUpdate}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" name='name' className='form-control' placeholder='Enter Name' value={values.name} onChange={e => setValues({ ...values, name: e.target.value })} />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" name='email' className='form-control' placeholder='Enter Email' value={values.email} onChange={e => setValues({ ...values, email: e.target.value })} />
          </div>
          <div>
            <label htmlFor="phone">Phone Number:</label>
            <input type="text" name='phone' className='form-control' placeholder='Enter Phone Number' value={values.phone} onChange={e => setValues({ ...values, phone: e.target.value })} />
          </div>
          <button>Update</button>
          <Link to="/">Back</Link>
        </form>
      </div>
    </div>
  )
}

export default Update