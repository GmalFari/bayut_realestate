import Head from 'next/head';
import { Box, Button } from '@chakra-ui/react';

import Footer from './Footer';
import Navbar from './Navbar';
import Carousel from './Carousel';
import Sidebar from "./Sidebar";
import { useState, useEffect } from 'react';

export default function Layout({ children }) {
  const [windowWidth, setWindowWidth] = useState(null);
  const isWindow = typeof window !== 'undefined';
  const getWidth = () => isWindow ? window.innerWidth : windowWidth;
  const resize = () => setWindowWidth(getWidth());
  useEffect(() => {
    console.log(windowWidth);
    if(isWindow){
      setWindowWidth(getWidth());
        window.addEventListener('resize', resize);
        return () => window.removeEventListener('resize', resize);
    
    }
  //eslint-disable-next-line
  }, [windowWidth]);

  return (
    <>
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;900&display=swap" rel="stylesheet" />
      </Head>
      <Box>
        <header>
          {/* <Navbar /> */}
          {windowWidth <  767?<Sidebar />:<Navbar />}
        </header>
        <div>
          <Carousel />
        </div>
        <main  m={['10px','10px']}>{children}</main>
        <footer>
          <Footer />
        </footer>
      </Box>
    </>
  );
}
