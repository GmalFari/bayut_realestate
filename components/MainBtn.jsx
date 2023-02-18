import React from 'react'
import { Button,Box } from '@chakra-ui/react';

const MainBtn = ({icon,bgcolor,color,content}) => {
  return (
      <Button ps={5} pe={5} bg={bgcolor} colorScheme={bgcolor} fontWeight={700} variant='inline' color={color}>
              {icon} <small style={{padding:"5px"}}>
                {content||''}</small>
        </Button>
  )
}

export default MainBtn;
