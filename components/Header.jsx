import Image from 'next/image';
import logo from '../public/logo.jpg';
import Navigation from './Navigation';
import Link from 'next/link';

export default function Header() {
  return (
    <div className='sticky inset-x-0 top-0 z-10 bg-opacity-60 bg-zinc-100 backdrop-blur-lg'>
      <div className='container flex items-center justify-between py-8 '>
        <Link href={'/'}>
          <Image
            src={logo}
            alt='logo'
            width={100}
            height={100}
            className=' h-auto rounded-full'
          />
        </Link>
        <Navigation />
      </div>
    </div>
  );
}
