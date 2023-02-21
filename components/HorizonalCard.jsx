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
import Horizontal from './Horizontal';
const HorizonalCard = (
    property) => {
      return (
      <Flex w={['95%','95%','700px','800px']} 
            height={[170,200]} 
            border='1px solid #ddd'  
            flexWrap="nowrap" 
            flexDirection={["row"]}
            overflow="hidden" m="2" 
            paddingTop="0" 
            justifyContent="flex-start" 
            cursor="pointer">
            
                    </Flex>
)
              }
export default HorizonalCard;
