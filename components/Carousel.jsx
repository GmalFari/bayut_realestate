import React from 'react'
import Head from 'next/head';
import Image from 'next/image';
import advancedSearch from "../assets/images/advanced.svg"
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
      <Box  >
        <Box className="carousel-inner">
          <Box className="carousel-item active">
            <picture style={{"width":"100%","min-width":"100%"}}>
                <source srcSet="https://argonaut.au.reastatic.net/resi-property/prod/homepage-web/web_winter_lrg-f24c1c214c382225e3cc.webp" media="(min-width: 501px)" type="image/webp"/>
                <source srcSet="https://argonaut.au.reastatic.net/resi-property/prod/homepage-web/web_winter_sml-2ef9d83b6bc8f0064d83.webp" type="image/webp"/>
                <source srcSet="https://argonaut.au.reastatic.net/resi-property/prod/homepage-web/web_winter_lrg-7691ae28813f2da6f446.jpg" media="(min-width: 501px)"/>
                <img style={{"width":"100%","min-width":"100%"}} src="https://argonaut.au.reastatic.net/resi-property/prod/homepage-web/web_winter_sml-53f6072c7104ff7bf5a4.jpg" alt=""/>
            </picture>
            <Box className="carousel-caption">
              <h5>أبحث الأن عن بيت الأحلام</h5>
              <p>نوفر لك جميع ماتحتاجة عن العقارات في مكان واحد</p>
              <Box className="card">
                <Box backgroundColor="white"padding={0}   className="card-body">
                  <Box className="rent-sale"  display="flex" justifyContent="space-around" position="absolute" top="-30">
                    <button className="sale">للبيع</button>
                    <button className="rent">للإيجار</button>
                  </Box>
                  <FormControl dir="rtl" padding="5px" background="white" borderRadius={10} width="100%" position="absolute" top="10px" >
                    <Input  color="black" border="none"  type='text'   />
                    <Button zIndex="10" borderRadius="30%" position="absolute" left="10px" color="white" backgroundColor="red">

                    <FaSearch/>
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
