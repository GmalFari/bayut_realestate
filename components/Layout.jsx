import Head from 'next/head';
import { Box, Button, Heading } from '@chakra-ui/react';

import Footer from './Footer';
import Navbar from './Navbar';
import Carousel from './Carousel';
import Sidebar from "./Sidebar";
import { useState, useEffect } from 'react';
export default function Layout({ children }) {
  const [windowWidth, setWindowWidth] = useState(null);
  useEffect(() => {
    const isWindow = typeof window !== 'undefined';
    const getWidth = () => isWindow ? window.innerWidth : windowWidth;
    const resize = () => setWindowWidth(getWidth());
    if(isWindow){
      setWindowWidth(getWidth());
        window.addEventListener('resize', resize);
    }
  //eslint-disable-next-line
  }, [windowWidth]);

  return (
    <Box dir="rtl">
      <Box>
      
          {/* <Navbar /> */}
          {windowWidth <  767?<Sidebar />:<Navbar />}
        <main>{children}</main>
          <Footer/>
      </Box>
    </Box>
  );
}





