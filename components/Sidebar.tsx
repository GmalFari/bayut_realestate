import React, { ReactNode, useContext } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from 'react-icons/fi';
import { IconType } from 'react-icons';
import { ReactText } from 'react';

interface LinkItemProps {
  name: string;
  url:string;
  icon: IconType;
}

import AuthContext from '../context/AuthContext';

const LinkItems: Array<LinkItemProps> = [
  { name: 'الرئيسية',url:'/', icon: FiHome },
  { name: 'أبحث عن عقار',url:'/search', icon: FiTrendingUp },
  { name: 'أستأجر عقار ',url:'/', icon: FiCompass },
  { name: 'بيع عقار',url:'/create', icon: FiStar },
  { name: '',url:'/agencies', icon: FiStar },
  { name: 'الإعدادات',url:'/', icon: FiSettings },
];

export default function SidebarWithHeader({
  children,
}: {
  children: ReactNode;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box 
    style={{"fontFamily":"font-family: 'Cairo', sans-serif"}} >
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        >

        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="0">
        {/* {children} */}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}
const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <>
     
    <Box  
      style={{"fontFamily":"sans-serif,Cairo"}}
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text style={{"fontFamily":"font-family: 'Cairo', sans-serif"}} fontSize="2xl" fontFamily="monospace" fontWeight="bold">
        <Link href="/" passHref>
          LibnaHouse
        </Link>
        </Text>

        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} url={link.url} icon={link.icon}>
         {link.name}
        
        </NavItem>
      ))}
    </Box></>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
  url:string;
}
const NavItem = ({url, icon, children, ...rest }: NavItemProps) => {
  return (
    <Link href={url} style={{ textDecoration: 'none' }}>
      <Flex
        
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        // _hover={{
        //   bg: 'cyan.400',
        //   color: 'white',
        // }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  let {user} = useContext(AuthContext);
  return (
    <Flex

    style={{"fontFamily":"sans-serif,Cairo"}}
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold">
        <Link href="/" passHref>
        LibnaHouse
        </Link>
      </Text>
      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s">
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm">Jamal Farea</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList zIndex={999}
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}>
              
              
              <MenuItem>              
                  <Link href="/profile/patriot-real-estate-7737" passHref>profile</Link>
              </MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>
              <Link href="/accounts/register" passHref>profile</Link>
              </MenuItem>
              <MenuItem>
                {user?<Link href="/accounts/logout" passHref>تسجيل خروج</Link>:
                        <Link href="/accounts/login" passHref>تسجيل دخول</Link>}             
              </MenuItem>
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};