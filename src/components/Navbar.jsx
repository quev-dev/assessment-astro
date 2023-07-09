import { useState } from 'react';
import iconLogo from '../content/icons/logo.webp';
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
      className='bg-c-lightest text-c-dark p-2 md:px-4 fixed w-full top-0 z-30'
    >
      <ul className='flex md:hidden flex-row justify-between items-center'>
        <li>
          <button className='navbar-button' onClick={toggleOptions}>
            {!showOptions && (
              <img className='w-8 h-8 relative top-1' src={iconList} alt='' />
            )}
            {showOptions && <img className='w-8 h-8 relative top-1' src={iconX} alt='' />}
          </button>
        </li>
        <li>
          <img id='site-logo' className='w-8 h-8' src={iconLogo} alt='A&B' />
        </li>
        <li>
          <a href='/'>
            <img className='w-6 h-6 relative right-1' src={iconDoor} alt='Home' />
          </a>
        </li>
      </ul>

      {showOptions && (
        <ul
          id='navbar-togglable-list'
          className='bg-c-lightest gap-4 top-11 left-0 absolute w-11/12 h-screen flex md:hidden flex-col justify-between'
        >
          <li className='flex flex-col relative top-2'>
            <a
              href='/'
              className='navbar-togglable-list-link flex flex-row gap-2 items-center'
            >
              <img className='w-4 h-4' src={iconDoor} alt='' />
              <p>Home</p>
            </a>
            <a
              href='/about'
              className='navbar-togglable-list-link flex flex-row gap-2 items-center'
            >
              <img className='w-4 h-4' src={iconInfo} alt='' />
              <p>About</p>
            </a>
            <a
              href='/posts'
              className='navbar-togglable-list-link flex flex-row gap-2 items-center'
            >
              <img className='w-4 h-4' src={iconChat} alt='' />
              <p>Blog Posts</p>
            </a>
          </li>
          <li className='p-4 relative bottom-11 text-sm flex flex-col gap-4'>
            <div class='text-sm'>
              <p>&copy; 2023 A&B</p>
              <p>All Rights Reserved.</p>
            </div>
            <ul className='flex flex-wrap gap-4 gap-y-0 pointer-events-none'>
              <li>Accessibility</li>
              <li>Media</li>
              <li>Copyright</li>
              <li>Privacy</li>
            </ul>
            <blockquote className='p-4 rounded-sm italic bg-c-lighter border-l-4 border-c-light'>
              <p className='opacity-90'>
                This is not a real site. This is a static site, developed to mimic a blog
                platform and practice design concepts with Astro.js and Markdown.
              </p>
            </blockquote>
            <aside>
              <p>
                GitHub repository:{' '}
                <a
                  className='text-c-accent hover:underline'
                  target='_blank'
                  rel='noreferrer'
                  href='https://github.com/quev-dev/bfe-assessment-astro'
                >
                  bfe-assessment-astro
                </a>
              </p>
            </aside>
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
          <a href='/about' className='flex flex-row gap-2 items-center p-2 rounded-sm'>
            <img className='w-4 h-4' src={iconInfo} alt='' />
            <p>About</p>
          </a>
          <a href='/posts' className='flex flex-row gap-2 items-center p-2 rounded-sm'>
            <img className='w-4 h-4' src={iconChat} alt='' />
            <p>Blog Posts</p>
          </a>
        </li>
      </ul>
    </nav>
  );
}
