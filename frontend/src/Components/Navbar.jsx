import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  const [userData , setUserData ] = useState(null)
  const [dropdown , setDropDown ] = useState(false)

  useEffect(()=>{
    const storageUserData = JSON.parse(localStorage.getItem('userData'))
    if(storageUserData){
      setUserData(storageUserData)
    }
  } , [])



  const handleLogout = ()=>{
    localStorage.removeItem('userData')
  }

 if(!userData){
  return (
    <>
    <nav className='text-white py-5 flex justify-between bg-orange-400'>
      <ul>
        <li><Link to="/">Saarthi</Link></li>
      </ul>
      <ul className='flex gap-5 items-center mx-5 text-black font-bold'>
        <li><Link to="/signup">signup</Link></li>
        <li><Link to="/login">Signin</Link></li>
      </ul>
    </nav>
    </>
  )
 }else{
  return (
    <>
    
		<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href='/'
      className="flex items-center space-x-3 rtl:space-x-reverse"
    >
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        Saarthi
      </span>
    </a>
    <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <p className='mx-10 text-xl'>{userData.user.username}</p>
      <button
        type="button"
        className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        id="user-menu-button"
        aria-expanded="false"
        data-dropdown-toggle="user-dropdown"
        data-dropdown-placement="bottom"
        onClick={()=>setDropDown(!dropdown)}
      >
        <span className="sr-only">Open user menu</span>
        <img
          className="w-12 h-12 rounded-full"
          src={userData.user.avatar}
          alt="user photo"
        />
      </button>
      {/* Dropdown menu */}
     {dropdown? (<> <div className='bg-orange-200 h-[8rem] w-[15rem] absolute top-[4.9rem]'>
    <button className='bg-black text-white px-10 my-5 py-2 mx-10 ' onClick={handleLogout}>Logout</button>
</div></>): null}
      <div
        className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
        id="user-dropdown"
      >
        <div className="px-4 py-3">
          <span className="block text-sm text-gray-900 dark:text-white">
            Bonnie Green
          </span>
          <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
            name@flowbite.com
          </span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              signup
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Earnings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Sign out
            </a>
          </li>
        </ul>
      </div>
      <button
        data-collapse-toggle="navbar-user"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-user"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
    </div>
    <div
      className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
      id="navbar-user"
    >
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link
            className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
            aria-current="page"
          >
            Home
          </Link>
        </li>
        <li>
          <Link to="/news"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
           News
          </Link>
        </li>
        <li>
          <Link to="/opportunity"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Opportunity
          </Link>
        </li>
        <li>
          <Link to="/course"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Course
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
 }
	
}

export default Navbar
