import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import Navbar from './Navbar';

function Signin() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password ) {
      return console.log('Please fill out all fields.');
    }
    try {
      setLoading(true);
     
      const res = await axios.post('http://localhost:8000/api/v1/users/login', formData, {
        headers: {
          'Content-Type': 'application/json', // Set content type to multipart/form-data
        },
      });

      
      if (res.data.success === true) {
        localStorage.setItem('userData' , JSON.stringify(res.data.data))
		setLoading(false)

		return navigate("/")
      }
      setLoading(false);
      if (res.status === 200) {
        console.log('send user to profile page');
      }
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <>
      <div className='min-h-screen mt-20 bg-gray-100'>
        <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
          {/* left */}
          <div className='flex-1'>
            <div className='font-bold dark:text-white text-4xl'>
              <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
                Saarthi
              </span>
            </div>
          </div>
          {/* right */}
          <div className='flex-1 bg-white p-6 rounded-lg shadow-md'>
            <form onSubmit={handleSubmit}>
              <div className='my-5'>
                <label htmlFor='email' className='block text-gray-600'>Email</label>
                <input
                  type='email'
                  placeholder='name@company.com'
                  id='email'
                  onChange={handleChange}
                  className='w-full border rounded-md px-4 py-2 focus:outline-none focus:border-blue-400'
                />
              </div>
              <div className='my-5'>
                <label htmlFor='password' className='block text-gray-600'>Password</label>
                <input
                  type='password'
                  placeholder='Password'
                  id='password'
                  onChange={handleChange}
                  className='w-full border rounded-md px-4 py-2 focus:outline-none focus:border-blue-400'
                />
              </div>
              <button
                className='bg-blue-600 text-white px-4 py-2 rounded-md w-full mt-5'
                type='submit'
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Sign in'}
              </button>
            </form>
            <div className='flex gap-2 text-sm mt-5'>
              <span>Don't have an account?</span>
              <Link to='/signup' className='text-blue-600'>
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
