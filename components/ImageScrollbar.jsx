import React from 'react'
import { useContext } from 'react'
import Image from 'next/image'
import { Img } from '@chakra-ui/react';
import {Box,Icon,Flex} from '@chakra-ui/react';
import { ScrollMenu , VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaArrowAltCircleLeft,FaArrowAltCircleRight, FaArrowCircleRight } from 'react-icons/fa';
import { useState,useEffect,useRef } from 'react';
const LeftArrow = () =>{
    const {scrollPrev} = useContext(VisibilityContext);
    return (
        <Flex justifyContent="center" alignItems="center" margin-right="1" >
            <Icon as={FaArrowAltCircleLeft} 
                onClick={() => scrollPrev() } 
                fontSize="2xl"
                cursor="pointer"
                display={['none','none','none','block']}
            />
        </Flex>

    )
}
const RightArrow = () =>{
    const {scrollNext} = useContext(VisibilityContext);
    return (
        <Flex justifyContent="center" alignItems="center" margin-right="1" >
            <Icon as={FaArrowAltCircleRight} 
                onClick={()=>scrollNext()} 
                fontSize="2xl"
                cursor="pointer"
                display={['none','none','none','block']}
            />
        </Flex>

    )
}

const ImageScrollbar = ({data}) => {
    const [defaultImg, setDefaultImg] = useState(data[0].url);
    const [imgWH ,setImgWH] =useState({width:"100%",
                                        height:"700px"})
    const imageRef = useRef()
    useEffect(()=>{
        if (imageRef){
           {imageRef.current.clientHeight  <= 700 ? setImgWH({width:"100%",
                                                                    height:imageRef.current.clientHeight}):
                                                                    {width:"100%",height:"700px",}
           }

        }
    },[defaultImg])
  return (
       <>
        <Box borderRadius="10px" width={imgWH.width} maxH={imgWH.height}   overflow={imgWH.height< 500?"hidden":"scroll"} textAlign="center">
        <Img src={defaultImg} ref={imageRef}  alt="" objectFit="contain"  />
        </Box>
         <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{overflow:"hidden"}}>
        {data.map((item) =>(
            <Box       
                    border={item.url === defaultImg?"4px solid #127578":"none"}
                    onClick={()=>{setDefaultImg(item.url)}} 
                    key={item.id} width="100px" height="100px" itemID={item.id} overflow="hidden" p="1">
                <Img
                
                placeholder='blur' 
                blurDataURL={item.url} 
                src={item.url} 
                width="100%"
                height="100%"
                alt="property"
                sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"                
                />
            </Box>
            
        ))}
    </ScrollMenu>
       </>
  )
}

export default ImageScrollbar;
