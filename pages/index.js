import Link from 'next/link';
import Image from 'next/image';
import {Flex,Box,Text,Button} from '@chakra-ui/react';
import Property from '../components/Property';
import {baseUrl,fetchApi} from '../utils/fetchApi';
import MainCard from "../components/MainCard";
const Banner = ({purpose , title1,title2,desc1,desc2,buttonText,linkName,imageUrl }) => (
  <Flex  flexWrap="wrap" m="10">
    <Image src={imageUrl} width={500} height={300} alt="banner"  />
    <Box m="10">
      <Text color="gray.500" fontSize="sm" fontWeight="medium" >{purpose}</Text>
      <Text  fontSize="3xl" fontWeight="bold" >{title1}<br/>{title2}</Text>
      <Text color="gray.700" paddingTop="3" paddingBottom="3"  fontSize="lg"  >{desc1}<br/> {desc2}</Text>
      <Button fontSize="xl">
          <Link href={linkName} > {buttonText}</Link>
      </Button>
  </Box>
  </Flex>
)


export default function Home({propertiesForSale,propertiesForRent}) {
  return (
    <Box  dir='rtl'> 
      <h1 style={{"textAlign":"center",margin:'10px',fontSize:"40px",fontWeight:"bold"}}   width="10px"  height="10px">اَخر العقارت </h1>
      <Box display="flex" flexFlow="row" flexWrap="" overflowX="scroll">
      {propertiesForRent.map((property) => <MainCard  property={property} key={property.id} />)}
      
      {propertiesForRent.map((property) => <MainCard  property={property} key={property.id} />)}
      </Box>
      <Banner
       purpose="Rent A Home "
       title1="rental home for "
       title2="Everyone" 
       desc1="Explore Apartments, Villas , Homes"
       buttonText="Explore Renting"
       linkName="/search?purpose=for-rent"
       imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
       />
       <Flex flexWrap="wrap" >
        {propertiesForRent.map((property) => <Property property={property} key={property.id}/>)}
       </Flex>
       <Banner
       purpose="Buy A Home"
       title1="Find , Buy & Own Your"
       title2="Dream Home" 
       desc1="Explore Apartments, Villas , Homes"
       buttonText="Explore Buying"
       linkName="/search?purpose=for-sale"
       imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
       />
       <Flex flexWrap="wrap" justifyContent="center" >
       {propertiesForSale.map((property) => <Property property={property} key= {property.id}/>)}
       </Flex>
      </Box>
  )
}
 

export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?lang=ar&locationExternalIDs=6020&lang=ar&purpose=for-sale&hitsPerPage=6`);
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?lang=ar&locationExternalIDs=6020&lang=ar&purpose=for-rent&hitsPerPage=6`) 
  return {
    props: {
      propertiesForSale:propertyForSale?.hits,
      propertiesForRent:propertyForRent?.hits,

    }
  }
}