import Link from 'next/link';
import Image from 'next/image';
import {Flex,Box,Text,Button, Heading} from '@chakra-ui/react';
import Property from '../components/Property';
import {baseUrl,fetchApi} from '../utils/fetchApi';
import MainCard from "../components/MainCard";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Carousel from '../components/Carousel';
import Rent from "../assets/images/Rent_a_home.webp";
import Sell from "../assets/images/Sell_a_home.webp";
import Buy from "../assets/images/Buy_a_home.webp";


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
  
   <Box>
    <Carousel />
     <Box 
     ms={['2px','50px','100px']}
     m={['2px','50px','100px']}> 
      <Heading textAlign="center" margin='10px' fontSize="20px" 
      fontWeight="bold"   width="10px"  height="10px">اَخر العقارت 
      </Heading>
      <Box display="flex" flexFlow="row" flexWrap="" overflowX="scroll">
      {propertiesForRent.map((property) => <MainCard  property={property} key={property.id} />)}
    </Box>
      <Box display={['flex']} 
         flexDirection={['column','column','column','row']}  
        justifyContent="center"
        alignItems="center"
        >
        <Link href="/search?purpose=for-rent">
        <Section1 image={Rent} title="أستأجر عقار " content="نحن نخلق تجربة سلسة عبر الإنترنت - من التسوق على أكبر شبكة تأجير ، إلى التقديم ، إلى دفع الإيجار."  />
        </Link>
        <Link href="/search?purpose=for-sale">
        <Section1 image={Buy} title=" أشتري عقار" content="اعثر على مكانك من خلال تجربة صور غامرة ومعظم القوائم ، بما في ذلك الأشياء التي لن تجدها في أي مكان آخر."/>
        </Link>
        <Section1  image={Sell} title="بيع عقار " content="بغض النظر عن المسار الذي تسلكه لبيع منزلك ، يمكننا مساعدتك في اجتياز عملية بيع ناجحة." />
      </Box>
      <Box mt="100px" textAlign="center" >
      <Heading  >
      العقارات الأكثر بحثاً
      </Heading>
      <Section2 />
      </Box>     
      </Box>
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