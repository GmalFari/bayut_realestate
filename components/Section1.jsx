import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import {Divider,Avatar,CardBody,Flex,ButtonGroup,Button,Text,CardHeader, Card,Stack, CardFooter,Heading, Box } from '@chakra-ui/react'
const Section1 = ({image,title,content}) => {
  return (
    <Card 
     textAlign="center"
      ms={['2px','5px','50px']}
      me={['2px','5px','10px']}
      height="fit-content"
      mt="50px"
      border="1px" 
      borderColor="rgba(0,0,0,0.3)">
    <CardBody display={['block','flex','flex','block']} >
    <Box height="180">
    <Image src={image}  width={['100%','50%']}  alt="default house" />
    </Box>
    <Box spacing='2' >
       <Box >
            <CardHeader p="3px 0 10px " textAlign={"start"} fontSize={['1.5rem','1.6rem','2rem']} fontWeight="600">
            {title}
            </CardHeader>
            <Text mb="20px" textAlign="right" fontSize="md" lineHeight="1.4">
            {content}
            </Text>
            <Stack float="left">
            <Button width="10em"  textColor="rgb(23 116 113)" fontWeight="bold" border="2px" variant='outline'>
                تصفح الاَن
            </Button>
            </Stack>
        </Box>
       </Box>
    </CardBody>
    </Card>
  )
}

export default Section1
