import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rishabh Negi",
  description: "A portfolio of Rishabh Negi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className='bg-black'>
      <body
        className={`${inter.className} overflow-x-hidden text-neutral-300 antialiased selection:bg-purple-400 selection:text-purple-950`}>
        <div className='fixed top-0 -z-10 h-full w-full'>
          <div className='relative h-full w-full bg-slate-950'>
            <div className='absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]'></div>
            <div className='absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]'></div>
          </div>
        </div>

        <div className='container mx-auto px-8'>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
