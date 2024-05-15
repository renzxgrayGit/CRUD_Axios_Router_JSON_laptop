import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Create = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/users', values)
      .then(res => {
        console.log(res);
        navigate('/')
      })
      .catch(err => console.log(err));
  }

  return (
    <div>
      <div>
        <h1>Add a User</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" name='name' className='form-control' placeholder='Enter Name' onChange={e => setValues({ ...values, name: e.target.value })} />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" name='email' className='form-control' placeholder='Enter Email' onChange={e => setValues({ ...values, email: e.target.value })} />
          </div>
          <div>
            <label htmlFor="phone">Phone Number:</label>
            <input type="text" name='phone' className='form-control' placeholder='Enter Phone Number' onChange={e => setValues({ ...values, phone: e.target.value })} />
          </div>
          <button>Submit</button>
          <Link to="/">Back</Link>
        </form>
      </div>
    </div>
  )
}

export default Create

