import React from 'react';
import Link from 'next/link';
import { Box,CardHeader,Flex,Card ,CardBody,Stack} from '@chakra-ui/react';
import {sections} from "../utils/searchSections";
const Section2 = () => {
  const contents = sections.map((content)=>(
   
     
          <Card pt="10px" pb="10px" ms="20px" mt="50px" mb="50px" width={['100%','45%','25%','25%']}>
          <CardHeader margin="auto"  fontWeight="bold">{content.title}</CardHeader>
          <Box margin="auto" >{content.content.map((content)=>(
              <Link href="/search?pupose=for-sale"  passHref>
              <CardBody  color="#177578" p="2px">{content}</CardBody>
              </Link>
        ))}
          </Box>
          </Card>


  ))
  
 return (
  <Flex  justifyContent="space-between" flexWrap="wrap">
   {contents}
  </Flex>

  )
}


export default Section2;
