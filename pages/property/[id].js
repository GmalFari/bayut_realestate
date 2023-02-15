
import {Flex,Select ,Box,Text,Input,Avatar,Spinner,Icon,Button} from '@chakra-ui/react';
import {FaBed,FaBath,FaMap} from 'react-icons/fa';
import {BsGridFill} from 'react-icons/bs';
import {GoVerified} from 'react-icons/go';
import millify from 'millify';
import ImageScrollbar from '../../components/ImageScrollbar';
import Link from 'next/link';
import {useState, createContext } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import {baseUrl,fetchApi} from '../../utils/fetchApi';
import MyMap from '../../components/Mymap';

//popup window
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react';
import { relative } from 'path';

  function BasicUsage({geography}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full']

    return (
      <Box >
        <Button onClick={onOpen}><FaMap/></Button>
  
        <Modal size={'full'} blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalBody>
            <ModalCloseButton  position="fixed" zIndex="9999" top="10%" left="90%" bg="blue.50" />
              
              <MyMap geoDetail={geography} />
            </ModalBody>
            <ModalFooter>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    )
  }

const PropertyDetails = ({propertyDetails:
    {price,rentFrequency,rooms,purpose
    ,title,description,baths,area,agency,
    isVerified,type,photos,amenities,furnishingStatus,geography}})=>{

    const [toggleMap,setToggleMap ] = useState(true)
    return(
<Box maxWidth="1000px" margin="auto" p="4">
        {photos && <ImageScrollbar data={photos} />}
        <Box w="full" p="6" >
        <Box w='full'>
        <Flex paddingTop='2' alignItems='center' justifyContent='space-between'>
          <Flex alignItems='center'>
            <Box paddingRight='3' color='green.400'>{isVerified && <GoVerified />}</Box>
            <Text fontWeight='bold' fontSize='lg'>AED {price}{rentFrequency && `/${rentFrequency}`}</Text>
          </Flex>
          <Link href={`/agencies`}>
            <Avatar size='sm' src={agency?.logo?.url}></Avatar>
          </Link>
        </Flex>
        <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='blue.400'>
          {rooms}
          <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />  |
          {/* {toggleMap ? 
          <Button onClick={()=>{setToggleMap(!toggleMap)}} ></Button> 
           : <MyMap geoDetail={geography} />} */}
          | <BasicUsage geography={geography} />
        </Flex>
      </Box>
            <Box marginTop="2">
            <Text fontSize="lg" marginBottom="2" fontWeight="bold">
                {title}
            </Text>
            <Text lineHeight="2" color="gray.600">
                {description }
            </Text>
            </Box>
            <Flex flexWrap="wrap" textTransform="uppercase" justifyContent="space-between">
                <Flex justifyContent="space-between" w="400px"  borderBottom="1px" borderColor="gray.100" p="3">
                    <Text> Type</Text>
                    <Text fontWeight="bold" >{type}</Text>
                </Flex>
                <Flex justifyContent="space-between" w="400px"  borderBottom="1px" borderColor="gray.100" p="3">
                    <Text> purpose</Text>
                    <Text fontWeight="bold" >{purpose}</Text>
                </Flex>
                {furnishingStatus &&(
                    <Flex justifyContent="space-between" w="400px"  borderBottom="1px" borderColor="gray.100" p="3">
                        <Text> furnishingStatus</Text>
                        <Text fontWeight="bold" >{furnishingStatus}</Text>
                    </Flex>
                )
                }
                <Box>
                    {amenities.length && <Text fontSize="2xl" fontWeight="black"  marginTop="5"  >
                        Amenities
                    </Text>}
                    <Flex flexWrap="wrap">
                        {amenities.map((item)=>(
                            item.amenities.map((amenity)=>(
                                <Text key={amenity.text} 
                                fontWeight="bold" 
                                color="blue.400"
                                fontSize="16"
                                p="2"
                                bg="gray.200"
                                m="1"
                                borderRadius="5"
                                >
                                {amenity.text}
                                </Text>
                            ))
                        ))}
                    </Flex>
                </Box>
           </Flex> 
            </Box>
</Box>
)}


export default PropertyDetails
export async function getServerSideProps({params: {id}}){
    const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}&lang=ar`)
    return {
        props : {
            propertyDetails:data
        }
    }
}

