import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Grid,
    Text,
    Stack,
    Button,
  } from '@chakra-ui/react';
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';  
export default function SocialProfileWithImage() {
  const {user} = useContext(AuthContext);
  console.log(user)
    return (
      <>
        hello {user?user.email:''}
      </>

     
//            <Box >
//            <Center > <Box 
//               maxW={'300px'}
//               w={'full'}
//               bg={'white'}
//               boxShadow={'2xl'}
//               rounded={'md'}
//               overflow={'hidden'}>
//               <Link href={`/accounts/`} passHref>
//               {/* <Image
//                 h={'170px'}
//                 w={'full'}
//                 src={
//                 //   company.logo.url
//                 }
//                 objectFit={'fill'}
//                 alt={'agencies image'}
//               /> */}
//               </Link>
//               <Box p={6}>
//                 <Stack spacing={0} align={'center'} mb={5}>
//                   <Heading fontSize={'lg'} align={'center'} fontWeight={500} fontFamily={'body'}>
//                     jamal farea
//                   </Heading>
//                 </Stack>
//                 <Stack direction={'row'} justify={'center'} spacing={6}>
//                   <Stack spacing={0} align={'center'}>
//                     <Text fontWeight={600}>3</Text>
//                     <Text fontSize={'sm'} color={'gray.500'}>
//                       Agent
//                     </Text>
//                   </Stack>
//                   <Stack spacing={0} align={'center'}>
//                     <Text fontWeight={600}>3</Text>
//                     <Text fontSize={'sm'} color={'gray.500'}>
//                     properties
//                     </Text>
//                   </Stack>
//                 </Stack>
//               </Box>
//             </Box>
// </Center>
//     </Box>
           
        
       
    );
  }

// export async function getServerSideProps({params: {id}}){
//     const data = await fetchApi(`http://127.0.0.1:8000/auth/users/me/`)
//     return {
//         props : {
//             userDetail:data
//         }
//     }
// }
