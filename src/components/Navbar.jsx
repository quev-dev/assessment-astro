export default function Navbar() {
  return (
    <nav className='bg-c-bg p-4 md:px-8 fixed w-full top-0 z-50'>
      <ul className='flex flex-row justify-between'>
        <li>
          <a href='/'>Home</a>
        </li>
        <li className='flex flex-row gap-4'>
          <a href='/about'>About</a>
          <a href='/posts'>Posts</a>
        </li>
      </ul>
    </nav>
  );
}
