import { useForm, Controller } from "react-hook-form";
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Formik, useFormik } from "formik";

  export default function SignupCard() {
    const [showPassword, setShowPassword] = useState(false);
    const { control, handleSubmit } = useForm({
      defaultValues: {
        firstName: '',
        select: {}
      }
    });

  const formik = useFormik({
    initialValues: {
      username:"",
      email: "",
      password1: "",
      password2: "",

      rememberMe: false
    },
    
   onSubmit: values => {
    // e.preventDefault();
    // alert(JSON.stringify(values, null, 2))
    const user = {
      username:formik.values.username,
      email: formik.values.email,
      password1:formik.values.password1,
      password2:formik.values.password2,
    };
    fetch('http://127.0.0.1:8000/auth/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          localStorage.clear();
          localStorage.setItem('token', data.auth_token);
          console.log(localStorage.getItem('token'))
          window.location.replace('http://localhost:3000/');

        } else {
          console.log('not found')
          localStorage.clear();
        }
      });
  }
  });

    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
            انشاء حساب
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              {/* to enjoy all of our cool features  */}
              تصفح أخر وأفضل العقارات ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
           <form onSubmit={formik.handleSubmit}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>الإسم الأول</FormLabel>
                    <Input type="text"
                      onChange={formik.handleChange}  />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>الإسم الأخير</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel> البريد الالكتروني</FormLabel>
                <Input type="email"
                  onChange={formik.handleChange}
               />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>كلمة السر </FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'}
                    
                  onChange={formik.handleChange} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>تأكيد كلمة السر</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} 
                      onChange={formik.handleChange}
                  />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  type="submit"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',

                  }}>
                 تسجيل
                </Button>
              </Stack>
              <Stack pt={6}>
                <Button  type="submit" align={'center'}>
                  لديك حساب بالفعل <Link color={'blue.400'}>تسجيل حساب</Link>
                </Button>
              </Stack>
            </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
    );
  }
  