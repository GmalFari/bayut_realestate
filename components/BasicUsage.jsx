import {Flex,Grid,Select ,Box,Text,Input,Avatar,Spinner,Icon,Button,
     PopoverHeader,Center} from '@chakra-ui/react';
import {FaBed,FaBath,FaMapMarked,FaYoutube,FaImages} from 'react-icons/fa';
import MyMap from "./Mymap";
import ImageScrollbar from './ImageScrollbar';
//popup window
import { useDisclosure } from '@chakra-ui/react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react';
export function BasicUsage({coverPhoto,geography,photos}) {
  const { isOpen: isOpen , onOpen: onOpen, onClose: onClose } = useDisclosure()
  const { isOpen: isVideoOpen , onOpen: onVideoOpen, onClose: onVideoClose } = useDisclosure()
  const { isOpen: isPictureOpen , onOpen: onPictureOpen, onClose: onPictureClose } = useDisclosure()
  return (
      <Box width="100%" ms={5} me={5}>
        <Grid mb={2} templateColumns='repeat(3, 1fr)' gap={2} >
        <Button color='blue.400' colorScheme='teal' variant='outline' onClick={onPictureOpen}>
        <FaImages /> <small style={{padding:"5px"}}  >الصور</small>     
      </Button>
          <Button colorScheme='teal' variant='outline' padding='1px' color='blue.400' onClick={onOpen}>
                <FaMapMarked /> <small style={{padding:"5px"}}  >  الخريطة</small></Button>       
          <Button colorScheme='teal' variant='outline'padding='2px' color='blue.400' onClick={onVideoOpen}>
              <FaYoutube  /> <small style={{padding:"5px"}}>
                فيديو</small>
        </Button>

        </Grid>
        <Modal size={"full"} blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
       
          <ModalHeader textAlign={"center"} >عرض العقارات على الخريطة</ModalHeader>
            <ModalBody ps={0} width="100%" minW="100%">
            <ModalCloseButton  position="fixed" zIndex="9999" top="10%" left="90%" bg="blue.50" />
              <MyMap geoDetail={geography} />
            </ModalBody>
          </ModalContent>
        </Modal>
        <Modal size={'full'}    blockScrollOnMount={false} isOpen={isVideoOpen} onClose={onVideoClose}>
          <ModalOverlay />
          <ModalContent  width="100%">
            <ModalBody ps={0}>
            <ModalCloseButton  position="fixed" zIndex="9999" top="10%" left="90%" bg="blue.50" />
              {/* <MyMap geoDetail={geography} /> */}
            </ModalBody>
          </ModalContent>
        </Modal>
        <Modal p="0" placement="top-end"  size={"full"} blockScrollOnMount={false} isOpen={isPictureOpen} onClose={onPictureClose}>
          <ModalOverlay />
          <ModalContent bg={"black.800"} w="100%" >
            <ModalBody ps={0}>
            <ModalCloseButton  position="fixed" zIndex="9999" top="10%" left="90%" bg="blue.50" />
            {photos && <ImageScrollbar coverPhoto={coverPhoto} data={photos} />}
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    )
  }
