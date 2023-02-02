import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import image from "../assets/images/yemen_enemy/img1.jpg";
import {Divider,Avatar,CardBody,Flex,ButtonGroup,Button,Text, Card,Stack, CardFooter,Heading, Box } from '@chakra-ui/react'
import millify from 'millify';
import {FaBed , FaBath} from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
const MainCard = (
  
  {property:{coverPhoto,price,rentFrequency,rooms,title,baths,area,agency,isVerified,externalID,createdAt}}  

  ) => {
    const date = new Date(createdAt);
    const currentDate = new Date()
    const created = currentDate.getHours() - date.getHours();

  return (
  <>
  <Head>

  </Head>
     <Card minW="200px" maxW='sm'>
   
   <CardBody position="relative">
   <Image src={coverPhoto ? coverPhoto.url:image} width="400" height="200" alt="default house" />
   <Box  
         position="absolute"
         top="25px"
         left="25px"
         background="#187875b0" 
         color="white" 
         fontWeight="bold" width="fit-content"
         borderRadius="5px" padding="0 3px"
         fontSize="14px"
         >
       <small >جديد-منذ {created} ساعة</small>
   </Box>
     <Stack spacing='2'>
       <Box >
        <Flex paddingTop="0" alignItems="center" justifyContent="space-between" >
            <Flex alignItems="center">
                <Box paddingRight="3" color="green.400">{isVerified && <GoVerified />}</Box>
                <Text fontWeight="bold" fontSize="sm"> AED {millify(price)}{rentFrequency && `/${rentFrequency}`}</Text>
            </Flex>
            
        </Flex>
       <Heading size='sm'>{title.length < 30 ?title:`${title.substring(0,30)}...`}</Heading>
                <Flex alignItems="center" p="1" justifyContent="space-between" w="250" color="blue.400">
                    {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
                </Flex>
                <Text fontSize="lg" >
                    {title.length > 30 ? `${title.substring(0,30)}...`:title}
                </Text>
            </Box>
       </Stack>
   </CardBody>
   <Divider />
 </Card>
  </>
  )
}

export default MainCard
