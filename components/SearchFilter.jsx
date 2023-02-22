import React from 'react'
import { useEffect,useState } from 'react';
import {Flex,Select ,Box,Text,Input,Spinner,Icon,Button} from '@chakra-ui/react';
import  { useRouter } from 'next/router';
import {MdCancel} from 'react-icons/md';
import Image from 'next/image';

import {filterData,getFilterValues} from "../utils/filterData";
const SearchFilter = () => {
  const [filters] = useState(filterData);
  const [searchTerm, setSearchTerm] = useState('');
  const [locationData, setLocationData] = useState();
  const [showLocations, setShowLocations] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchProperties = (
    (filtervalues) =>{
      const path = router.pathname;
      const {query } = router;
      const values = getFilterValues(filtervalues);
      values.forEach((item)=>{
        if(item.value && filtervalues?.[item.name]){
          query[item.name] = item.value
        }
      })
      router.push({pathname:path,query})
    }
    
  )
  useEffect(()=>{
    if(searchTerm !== ''){
      const fetchData = async ()=>{
        setLoading(true);
        const data = await fetchApi(`{baseUrl}/auto-complete?query=${searchTerm}`)
        setLoading(data?.hits);
        setLoading(false);
        setLocationData(data?.hits);
        fetchData();
        };
    }
  },[searchTerm]);
  
  
  return (
  <Flex bg="gray.100" p="4" justifyContent="center" flexWrap="wrap">
    {filters.map((filter)=>(
      <Box key={filter.queryName}>
      <Select
        placeholder={filter.placeholder}
        w="fit-content"
        p="2"
       onChange={(e)=>searchProperties({[filter.queryName]:e.target.value})} >
          {
            filter?.items?.map((item)=>(
            <option value={item.value} key={item.value}>{item.name}</option>
          ))
          }

        </Select>
      </Box>
    ))}
  </Flex>
  )
}

export default SearchFilter;
