import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import Navbar from './Navbar';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    fullName: '',
    email: '',
    password: '',
    avatar: null
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleAvatarChange = (e) => {
    setFormData({ ...formData, avatar: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password || !formData.avatar) {
      console.log('Please fill out all fields.');
      return;
    }
    setLoading(true);
    try {
      const formDataWithAvatar = new FormData();
      formDataWithAvatar.append('avatar', formData.avatar);
      formDataWithAvatar.append('username', formData.username);
      formDataWithAvatar.append('fullName', formData.fullName);
      formDataWithAvatar.append('email', formData.email);
      formDataWithAvatar.append('password', formData.password);

      const res = await axios.post('http://localhost:8000/api/v1/users/register', formDataWithAvatar, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      if (res.data.success === true) {
        localStorage.setItem('userData', JSON.stringify(res.data.data));
        
        navigate("/login")
      }
    } catch (error) {
      console.error('Error:', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div className='min-h-screen mt-20 bg-gray-100'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* left */}
        <div className='flex-1'>
          <div className='font-bold text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
              Saarthi
            </span>
          </div>
        </div>
        {/* right */}
        <div className='flex-1 bg-white p-6 rounded-lg shadow-md'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <label htmlFor='username' className='text-sm'>Username</label>
              <input
                type='text'
                placeholder='Username'
                id='username'
                value={formData.username}
                onChange={handleChange}
                className='w-full border rounded-md px-4 py-2 focus:outline-none focus:border-blue-400'
              />
            </div>
            <div>
              <label htmlFor='fullName' className='text-sm'>Full Name</label>
              <input
                type='text'
                placeholder='Full Name'
                id='fullName'
                value={formData.fullName}
                onChange={handleChange}
                className='w-full border rounded-md px-4 py-2 focus:outline-none focus:border-blue-400'
              />
            </div>
            <div>
              <label htmlFor='email' className='text-sm'>Email</label>
              <input
                type='email'
                placeholder='name@company.com'
                id='email'
                value={formData.email}
                onChange={handleChange}
                className='w-full border rounded-md px-4 py-2 focus:outline-none focus:border-blue-400'
              />
            </div>
            <div>
              <label htmlFor='password' className='text-sm'>Password</label>
              <input
                type='password'
                placeholder='Password'
                id='password'
                value={formData.password}
                onChange={handleChange}
                className='w-full border rounded-md px-4 py-2 focus:outline-none focus:border-blue-400'
              />
            </div>
            <div>
              <label htmlFor='avatar' className='text-sm'>Upload Avatar</label>
              <input
                type='file'
                accept='image/*'
                id='avatar'
                onChange={handleAvatarChange}
                className='w-full border rounded-md px-4 py-2 focus:outline-none focus:border-blue-400'
              />
            </div>
            <button
              className='bg-blue-600 text-white px-4 py-2 rounded-md w-full mt-5'
              type='submit'
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Sign Up'}
            </button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Already have an account?</span>
            <Link to='/login' className='text-blue-600'>
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default Signup;
