"use client";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/rishabh.jpeg";
import Image from "next/image";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
const Hero = () => {
  return (
    <div className='border-b border-neutral-800 pb-4 lg:mb-35'>
      <div className='flex flex-wrap items-center'>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>
            <motion.h1
              variants={container(0)}
              initial='hidden'
              animate='visible'
              className='pb-16 text-5xl font-thin tracking-tight lg:text-8xl'>
              Rishabh Negi
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial='hidden'
              animate='visible'
              className='bg-gradient-to-r from-pink-300 via-slate-500 to bg-purple-500 bg-clip-text text-3xl lg:text-4xl ml-2 tracking-tight text-transparent'>
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial='hidden'
              animate='visible'
              className='my-2 ml-2 max-w-xl py-6 tracking-tighter'>
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className='w-full lg:w-1/2 lg:pl-44 lg:pr-16 lg:pb-32 lg:pt-16'>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className='flex justify-center'>
            <Image
              src={profilePic}
              alt='Rishabh Negi'
              className='rounded-3xl brightness-90'
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
