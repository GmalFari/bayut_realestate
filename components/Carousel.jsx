import React from 'react'
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import advancedSearch from "../assets/images/advanced.svg";
import image from "../assets/images/webImg1.webp";
import img2 from "../assets/images/img2.jpg";
import { useState , useEffect } from 'react';
import { fetchApi } from '../utils/fetchApi';
import MainSearch from "../components/MainSearch";
import { Box,Text,Heading } from '@chakra-ui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
const Carousel = () => {
  return (
      <Box>
        <Box className="carousel-inner">
          <Box className="carousel-item active">

            <picture style={{"width":"100%","min-width":"100%"}}>
                <Image width="100%" minwidth="100%" src={image} alt="carousel image" />
            </picture>
            <Box className="carousel-caption">
              <Heading >أبحث الأن عن بيت الأحلام</Heading>
              <Text>نوفر لك جميع ماتحتاجة عن العقارات في مكان واحد</Text>
              <MainSearch />
              </Box>
          </Box>
        </Box>
      </Box>

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