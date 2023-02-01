import Head from 'next/head';
import { Box } from '@chakra-ui/react';

import Footer from './Footer';
import Navbar from './Navbar';
import Carousel from './Carousel';
import Sidebar from "./Sidebar";
import { useState, useEffect } from 'react';

const useScreenWidth = () => {
    const [windowWidth, setWindowWidth] = useState(null);
    const isWindow = typeof window !== 'undefined';
    const getWidth = () => isWindow ? window.innerWidth : windowWidth;

    const resize = () => setWindowWidth(getWidth());

    useEffect(() => {
      console.log(windowWidth);
        if (isWindow) {
            setWindowWidth(getWidth());
            window.addEventListener('resize', resize);
            return () => window.removeEventListener('resize', resize);
        }
    //eslint-disable-next-line
    }, [isWindow]);

    return windowWidth;
}

export default function Layout({ children }) {

  return (
    <>
      <Head>
        <title>Real Estate</title>
      </Head>
      <Box maxWidth='1280px' m='auto'>
        <header>
          {/* <Navbar /> */}
          <Sidebar />
        </header>
        <div>
          <Carousel />
        </div>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </Box>
    </>
  );
}
