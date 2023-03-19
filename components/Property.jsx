import Link from "next/link";
import Image from 'next/image';
import {Box,Flex,Text,Avator} from '@chakra-ui/react';
import millify from 'millify';
import {BsGridFill} from 'react-icons/bs';
import {GoVerified} from 'react-icons/go'
import DefualtImage from '../assets/images/Default_img.jpg'
import { Avatar } from "@chakra-ui/react";
import {FaBed , FaBath} from 'react-icons/fa';
import { Card,CardBody,CardFooter,Stack,Heading,Button } from "@chakra-ui/react";
const Property = (
    {property:{coverPhoto,price,rentFrequency,rooms,title,baths,area,agency,isVerified,externalID,geography}}) => (
        <Flex flexWrap="wrap" flexDirection="column" overflow="hidden" m="2" paddingTop="0" justifyContent="flex-start" cursor="pointer">
            <Link  href={`/property/${externalID}`} passHref>
            <Box me="4" >
                <Image src={coverPhoto ? coverPhoto.url:DefualtImage} width="300" height="200" alt="default house" />
            </Box>
            </Link>
            <Box >
                <Flex paddingTop="2" alignItems="center" justifyContent="space-between" >
                    <Flex alignItems="center">
                        <Box paddingRight="3" color="green.400">{isVerified && <GoVerified />}</Box>
                        <Text fontWeight="bold" fontSize="lg"> ريال يمني  {millify(price)}{rentFrequency && `/${rentFrequency}`}</Text>
                    </Flex>
                    <Link href={`/agencies`}>
                    <Box>
                        <Avatar size="sm" src={agency?.logo?.url} />
                    </Box>
                    </Link>

                </Flex>
                <Flex alignItems="center" p="1" justifyContent="space-between" w="250" color="blue.400">
                    {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
                </Flex>
                <Text fontSize="lg" >
                    {title.length > 30 ? `${title.substring(0,30)}...`:title}
                </Text>
            </Box>
        </Flex>
       

    
)
export default Property;
