import Link from "next/link";
import {Text,Flex,Box, Grid,GridItem, Button } from '@chakra-ui/react';
import {FcMenu,FcHome,FcAbout}  from 'react-icons/fc';
import {BsSearch} from 'react-icons/bs'
import {FiKey} from 'react-icons/fi';

const Navbar = () =>  (
    <Grid
    templateAreas={`"header nav profile"`}
    gridTemplateRows={'50px'}
    gridTemplateColumns={"300px 1fr 200px"}
    pt="10px"
  >
    <GridItem  fontWeight="bold"  pl='2' area={'header'}>
      LibnaHouse
    </GridItem>
    <GridItem pl='2'  area={'nav'}>
    <Flex fontWeight="bold" justifyContent="space-around">
    <Link href="/" passHref>
    <Text>Home</Text>
    </Link>
    <Link href="/" passHref>
    <Text>Search</Text>
    </Link>
    <Link href="/search?purpose=for-rent" passHref>
    <Text>properties For Rent</Text>
    </Link>
    <Link href="/search?purpose=for-sale" passHref>
    <Text>properties For Sale</Text>
    </Link>
    </Flex>
    </GridItem>
    <GridItem ms="100px" pl='2' area={'profile'}>
      <Button >Login</Button>
    </GridItem>
  </Grid>
    );
export default Navbar;