import React from 'react'
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import advancedSearch from "../assets/images/advanced.svg";
import image from "../assets/images/yemen_enemy/img1.jpg";
import img2 from "../assets/images/yemen_enemy/img2.jpg";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button
} from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import { FaSearch } from 'react-icons/fa';
const Carousel = () => {

  return (
    <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;900&display=swap" rel="stylesheet" />
      </Head>
      <Box>
        <Box className="carousel-inner">
          <Box className="carousel-item active">

            <picture style={{"width":"100%","min-width":"100%"}}>
                {/* <source srcSet="https://argonaut.au.reastatic.net/resi-property/prod/homepage-web/web_winter_lrg-f24c1c214c382225e3cc.webp" media="(min-width: 501px)" type="image/webp"/>
                <source srcSet="https://argonaut.au.reastatic.net/resi-property/prod/homepage-web/web_winter_sml-2ef9d83b6bc8f0064d83.webp" type="image/webp"/>
                <source srcSet="https://argonaut.au.reastatic.net/resi-property/prod/homepage-web/web_winter_lrg-7691ae28813f2da6f446.jpg" media="(min-width: 501px)"/>
                <img style={{"width":"100%","min-width":"100%"}} src="https://argonaut.au.reastatic.net/resi-property/prod/homepage-web/web_winter_sml-53f6072c7104ff7bf5a4.jpg" alt=""/> */}
                <source srcSet={img2} />
                <Image style={{"width":"100%","min-width":"100%"}} src={image} alt="carousel image" />
            </picture>
            <Box className="carousel-caption">
              <h5>أبحث الأن عن بيت الأحلام</h5>
              <p>نوفر لك جميع ماتحتاجة عن العقارات في مكان واحد</p>
              <Box className="card">
                <Box background="#0000009c" borderRadius="20px" padding={0}   className="card-body">
                  <Box  background="#0000009c" borderRadius="10px" className="rent-sale"  display="flex" justifyContent="space-around" position="absolute" top="-30">
                  <Link href="/search?purpose=for-sale" passHref>
                    <button  className="sale">للبيع</button>
                  </Link>
                  <Link href="/search?purpose=for-rent" passHref>
                    <button className="rent">للإيجار</button>
                    </Link>
                  </Box>
                  <FormControl 
                       dir="rtl" 
                       padding="5px" 
                       background="white" 
                       borderRadius={10} width="100%" 
                       position="absolute" top="20px" >
                      <Input paddingLeft="60px" color="black" border="none"  type='text' placeholder='أبحث بأسم المدينة المنطقة أو النوع'   />
                    <Button width="20px" zIndex="10" borderRadius="30%" position="absolute" left="10px" color="white" background="#187875">
                      <Link href="/search?locationExternalIDs=6020" passHref>
                    <FaSearch/>
                    </Link>
                    </Button>              
                  </FormControl>

                </Box>
               
                </Box>
              </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Carousel
