export default function Navbar() {
  return (
    <nav className='p-4 shadow-sm'>
      <ul className='flex flex-row justify-between'>
        <li>
          <a href='/'>Home</a>
        </li>
        <li className='flex flex-row gap-2'>
          <a href='/about'>About</a>
          <a href='/posts'>Posts</a>
        </li>
      </ul>
    </nav>
  );
}
