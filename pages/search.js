import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image';
import {Flex,Box,Text,Icon} from '@chakra-ui/react';
import {BsFilter } from 'react-icons/bs'; 
import SearchFilter from '../components/SearchFilter';
import Main_search from "../components/MainSearch"
import Property from '../components/Property';
import noresult from '../assets/images/noresult.svg';
import {baseUrl,fetchApi} from '../utils/fetchApi';
const Search = ({properties}) => {
    const [searchFilter,setSearchFilter] = useState(false);
    const router = useRouter();
  return (
    <Box>
        <Flex
    
        cursor="pointer" 
       
        bg="gray.100"
        borderBottom="1px"
        borderColor="gray.200"
        p={{"base":"10","md":"2"}}
        fontWeight="black"
        fontSize="lg"
        justifyContent="center"
        alignItems="center"
        onClick={() => setSearchFilter(!searchFilter)}
        >
        <Text  > Search properties by filter </Text>
        <Icon paddingLeft="2" w="7" as={BsFilter} />
        </Flex>
        {searchFilter && <Main_search />}
        <Text fontSize="2xl" p="4" fontWeight="bold">
            properties {router.query.purpose}
        </Text>
        <Flex  flexWrap="wrap" justifyContent="center" alignItems="center" >
            {properties.map((property) =><Property property={property} key={property.id} />)}
        </Flex>
        {properties.length === 0 && (
            <Flex justifyContent="center" alignItems="center" flexDirection="column" marginTop="5" marginBottom="5">
            <Image alt="no result" src={noresult}/>
            <Text fontSize="2xl" marginTop="3">No Results founds</Text>
            </Flex>
        )}
    </Box>
  )
}


export default Search


export async function getServerSideProps({query}) {
    const purpose = query.purpose || 'for-rent';
    const rentFrequency = query.rentFrequency || 'yearly';
    const minPrice = query.minPrice || '0';
    const maxPrice = query.maxPrice || '1000000';
    const bathsMin = query.bathsMin || '0';
    const roomsMin = query.roomsMin || '0';
    const sort = query.sort || 'price-desc';
    const areaMax = query.areaMax || '35000';
    const locationExternalIDs = query.locationExternalIDs || '5002';
    const categoryExternalID = query.categoryExternalID || '4'; 
    const data = await fetchApi(`${baseUrl}/properties/list?
                    query=${query}
                    &locationExternalIDs=${locationExternalIDs}
                    &purpose=${purpose}&hitsPerPage=6&
                    rentFrequency=${rentFrequency}&
                    minPrice=${minPrice}&
                    maxPrice=${maxPrice}&
                    bathsMin=${bathsMin}&
                    roomsMin=${roomsMin}&
                    sort=${sort}&
                    areaMax=${areaMax}&
                    categoryExternalID=${categoryExternalID}
                    `);

                    return {
                        props:{
                            properties:data?.hits
                        }
                    }
}