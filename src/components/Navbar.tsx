import Image from "next/image";
import logo from "../assets/RishabhLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className='mb-2 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <Image
          src={logo}
          alt='logo'
          className='size-10 mx-2'
        />
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <Link href='https://www.linkedin.com/in/r1shabhnegi'>
          <FaLinkedin className='text-white' />
        </Link>
        <Link href='https://github.com/r1shabhnegi'>
          <FaGithub className='text-white' />
        </Link>
        <Link href='https://x.com/r1shabhnegi'>
          <FaSquareXTwitter className='text-white' />
        </Link>
        <Link href='https://www.instagram.com/r1shabhnegi'>
          <FaInstagram className='text-white' />
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
