import React from 'react'
import { Box } from '@chakra-ui/react';
import {sections} from "../utils/searchSections";
const Section2 = () => {
    
  return (
    <Box>
        {sections.map((section)=>{
        <h1>{section}</h1>
    })}
    </Box>
  )
}

export default Section2;
