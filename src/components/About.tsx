"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import aboutImg from "../assets/rishabh.jpeg";
import { ABOUT_TEXT } from "@/constants";
const About = () => {
  return (
    <div className='border-b border-neutral-800 pb-4'>
      <h1 className='my-20 text-center text-4xl'>
        About <span className='text-neutral-500'>Me</span>
      </h1>
      <div className='flex flex-wrap'>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className='w-full lg:w-1/2 lg:p-16'>
          <div className='flex items-center justify-center'>
            <Image
              src={aboutImg}
              alt='about'
              className='rounded-3xl brightness-90'
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className='w-full lg:w-1/2'>
          <div className='flex justify-center lg:justify-start'>
            <p className='my-12 max-w-xl py-6'>{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default About;
