import Link from 'next/link';
import { useRouter } from 'next/router';


const Navbar = () => {
  const router = useRouter();


  return (
    <nav className='flex justify-between items-center h-20 mr-6'>
      <div className="flex items-center">
        <Link href="/" className='w-auto h-10'>
          <img src="/logo.png" className="h-full object-contain pl-6"/>
        </Link>
      </div>
      <ul className='flex items-center'>
        <li className={`mr-4 ${router.pathname === '/' ? 'underline text-red-500 mr-4' : 'mr-4'}`}>
          <Link href="/">
            <p>HOME</p>
          </Link>
        </li>
        <li className={`mr-4 ${router.pathname === '/about' ? 'underline text-red-500 mr-4' : 'mr-4'}`}>
          <Link href="/about">
            <p>ABOUT</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
