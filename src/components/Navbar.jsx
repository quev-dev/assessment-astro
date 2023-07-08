import { useState } from 'react';
import iconChat from '../content/svgs/chat-fill.svg';
import iconList from '../content/svgs/list.svg';
import iconDoor from '../content/svgs/door-fill.svg';
import iconInfo from '../content/svgs/info-fill.svg';
import iconX from '../content/svgs/x.svg';

export default function Navbar() {
  const [showOptions, setShowOptions] = useState(false);
  const toggleOptions = () => setShowOptions(!showOptions);

  return (
    <nav
      id='navbar'
      className='bg-c-lightest p-2 md:px-4 fixed w-full top-0 z-30'
    >
      <ul className='flex md:hidden flex-row justify-between items-center'>
        <li>
          <button className='navbar-button' onClick={toggleOptions}>
            {!showOptions && (
              <img className='w-8 h-8 relative top-1' src={iconList} alt='' />
            )}
            {showOptions && (
              <img className='w-8 h-8 relative top-1' src={iconX} alt='' />
            )}
          </button>
        </li>
        <li>
          <p className='text-xl'>A&B</p>
        </li>
        <li>
          <a href='/'>
            <img
              className='w-6 h-6 relative right-1'
              src={iconDoor}
              alt='Home'
            />
          </a>
        </li>
      </ul>

      {showOptions && (
        <ul
          id='navbar-togglable-list'
          className='bg-c-lightest gap-4 top-11 left-0 absolute w-11/12 h-screen flex md:hidden flex-col'
        >
          <li className='flex flex-col'>
            <a href='/' className='flex flex-row gap-2 items-center'>
              <img className='w-4 h-4' src={iconDoor} alt='' />
              <p>Home</p>
            </a>
            <a href='/about' className='flex flex-row gap-2 items-center'>
              <img className='w-4 h-4' src={iconInfo} alt='' />
              <p>About</p>
            </a>
            <a href='/posts' className='flex flex-row gap-2 items-center'>
              <img className='w-4 h-4' src={iconChat} alt='' />
              <p>Posts</p>
            </a>
          </li>
        </ul>
      )}

      <ul
        id='navbar-desktop'
        className='hidden md:flex flex-row justify-between items-center'
      >
        <li>
          <a
            href='/'
            className='max-w-max flex flex-row gap-1 items-center p-2 rounded-sm'
          >
            <img className='w-6 h-6' src={iconDoor} alt='Home' />
            <p>A&B Blogs</p>
          </a>
        </li>
        <li className='flex flex-row gap-1'>
          <a
            href='/about'
            className='flex flex-row gap-2 items-center p-2 rounded-sm'
          >
            <img className='w-4 h-4' src={iconInfo} alt='' />
            <p>About</p>
          </a>
          <a
            href='/posts'
            className='flex flex-row gap-2 items-center p-2 rounded-sm'
          >
            <img className='w-4 h-4' src={iconChat} alt='' />
            <p>Posts</p>
          </a>
        </li>
      </ul>
    </nav>
  );
}
