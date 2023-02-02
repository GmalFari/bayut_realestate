import React from 'react'
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import advancedSearch from "../assets/images/advanced.svg";
import image from "../assets/images/yemen_enemy/img1.jpg";
import img2 from "../assets/images/yemen_enemy/img2.jpg";
import { useState , useEffect } from 'react';
import { fetchApi } from '../utils/fetchApi';
import Main_search from "../components/Main_search";
import { Box } from '@chakra-ui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
const Carousel = () => {
  return (
  
    <>
    
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
              <Main_search />
              </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Carousel


export async function getServerSideProps({query}) {
  const purpose = query.purpose || 'for-rent';
  const rentFrequency = query.rentFrequency || 'yearly';
  const minPrice = query.minPrice || '0';
  const maxPrice = query.maxPrice || '1000000';
  const bathsMin = query.bathsMin || '0';
  const roomsMin = query.roomsMin || '0';
  const sort = query.sort || 'price-desc';
  const areaMax = query.areaMax || '35000';
  const locationExternalIDs = query.locationExternalIDs || '5002';
  const categoryExternalID = query.categoryExternalID || '4'; 
  const data = await fetchApi(`${baseUrl}/auto-complete?locationExternalIDs=${locationExternalIDs}
                  &purpose=${purpose}&hitsPerPage=6&
                  rentFrequency=${rentFrequency}&
                  minPrice=${minPrice}&
                  maxPrice=${maxPrice}&
                  bathsMin=${bathsMin}&
                  roomsMin=${roomsMin}&
                  sort=${sort}&
                  areaMax=${areaMax}&
                  categoryExternalID=${categoryExternalID}
                  `);

                  return {
                      props:{
                          properties:data?.hits
                      }
                  }
}