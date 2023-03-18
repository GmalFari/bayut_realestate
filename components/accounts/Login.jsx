import { useFormik } from "formik";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack,
  InputGroup,
  InputRightElement
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useState,useEffect } from "react";
const  LoginComponent=()=> {
  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      
      window.location.replace('http://localhost:3000/');
    } else {
      setLoading(false);
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false
    },
    
   onSubmit: values => {
    // e.preventDefault();
    // alert(JSON.stringify(values, null, 2))
    const user = {
      email: formik.values.email,
      password: formik.values.password
    };
    fetch('http://127.0.0.1:8000/auth/token/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        if (data.auth_token) {
          localStorage.clear();
          localStorage.setItem('token', data.auth_token);
          console.log(localStorage.getItem('token'))
          window.location.replace('http://localhost:3000/');

        } else {
          console.log('not found')
          setEmail('');
          setPassword('');
          localStorage.clear();
          setErrors(true);
        }
      });
  }
  });
  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box bg="white" p={6} rounded="md">
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={4} align="flex-start">
            <FormControl>
              <FormLabel htmlFor="email">البريد الإلكتروني</FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">كلمة السر </FormLabel>
              <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} />
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
            <Checkbox
              id="rememberMe"
              name="rememberMe"
              onChange={formik.handleChange}
              isChecked={formik.values.rememberMe}
              colorScheme="purple"
            >
              Remember me?
            </Checkbox>
            <Button type="submit" colorScheme="purple" width="full">
              تسجيل دخول
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
}
export default LoginComponent;