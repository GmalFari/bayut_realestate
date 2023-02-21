import Link from "next/link";
import Image from 'next/image';
import { Img } from "@chakra-ui/react";
import { FaPhone,FaEnvelope,FaWhatsapp,FaMapMarker,faGridVer} from "react-icons/fa";
import {Box,Grid,Flex,Text,Avator, Spacer} from '@chakra-ui/react';
import millify from 'millify';
import {BsBoxArrowInDown, BsGridFill,BsFillGeoAltFill} from 'react-icons/bs';
import {GoVerified} from 'react-icons/go'
import DefualtImage from "../assets/images/webimg2.webp"
import { Avatar } from "@chakra-ui/react";
import {FaBed , FaBath} from 'react-icons/fa';
import { Card,CardBody,CardFooter,Stack,Heading,Button } from "@chakra-ui/react";
import MainBtn from "./MainBtn";
import Property from './Property';
const HorizonalCard = ()=>(
    {toggleVerticalCard,property:{coverPhoto,price,rentFrequency,location,rooms,title_l1,baths,area,agency,isVerified,externalID,geography}}) => {
      return(
      <Box>
       
     </Box>
)
              }
export default HorizonalCard;
