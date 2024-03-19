import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
        console.log(res.data.message);
        // Redirect or navigate to profile page
      }
    } catch (error) {
      console.error('Error:', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className='min-h-screen mt-20'>
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
          <div className='flex-1'>
            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
              <div>
                <label htmlFor='username'>Username</label>
                <input
                  type='text'
                  placeholder='Username'
                  id='username'
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor='fullName'>Full Name</label>
                <input
                  type='text'
                  placeholder='Full Name'
                  id='fullName'
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  placeholder='name@company.com'
                  id='email'
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  placeholder='Password'
                  id='password'
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor='avatar'>Upload Avatar</label>
                <input
                  type='file'
                  accept='image/*'
                  id='avatar'
                  onChange={handleAvatarChange}
                />
              </div>
              <button className='bg-black text-white' type='submit' disabled={loading}>
                {loading ? 'Loading...' : 'Sign Up'}
              </button>
            </form>
            <div className='flex gap-2 text-sm mt-5'>
              <span>Have an account?</span>
              <Link to='/sign-in' className='text-blue-500'>
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
