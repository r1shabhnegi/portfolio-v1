import Image from "next/image";
import logo from "../assets/RishabhLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
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
        <FaLinkedin className='text-white' />
        <FaGithub className='text-white' />
        <FaSquareXTwitter className='text-white' />
        <FaInstagram className='text-white' />
      </div>
    </nav>
  );
};
export default Navbar;
