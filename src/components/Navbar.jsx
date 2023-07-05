export default function Navbar() {
  return (
    <nav className='p-4 md:px-8 shadow-sm'>
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
