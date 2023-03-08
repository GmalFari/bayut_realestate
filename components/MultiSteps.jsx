import React, { useState,useEffect } from 'react';

import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
} from '@chakra-ui/react';

import yemenGis from "../utils/yemenGis.json";
import gadm41_YEM_1 from "../utils/gadm41_YEM_1.json";
import {typeProperty} from "../utils/selectedData";
import {viewList} from "../utils/viewList";
import { useToast } from '@chakra-ui/react';
import axios from 'axios';



const Form1 = () => {
  const [city , setCity] = useState("")
  const [state , setState] = useState("")
  
  const handleCityChange = (e)=>{
    setCity(e.target.value)
  }
  const handleStateChange = (e)=>{
    setState(e.target.value)

  }
  return (
    <>
    
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
      أعلن عن عقارك 
      </Heading>
      
      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          htmlFor="typeProperty"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}>
           نوع العقار
        </FormLabel>
        <Select
          direction="rtl"
          id="typeProperty"
          name="typeProperty"
          autoComplete="typeProperty"
          placeholder=" نوع العقار"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md">
          {typeProperty.map((typeP)=>{
        return (
            <option key={typeP} value={typeP} >{typeP}</option>
        )
  })}
        </Select>
      </FormControl>
      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          htmlFor="purpose"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}>
           الغرض 
        </FormLabel>
        <Select
          direction="rtl"
          id="purpose"
          name="purpose"
          autoComplete="purpose"
          placeholder=" الغرض"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md">
          <option>للبيع</option>
          <option>للإيجار</option>
        </Select>
      </FormControl>
      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          htmlFor="city"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}>
      إسم المدينة
        </FormLabel>
        <Select
          id="city"
          name="city"
          autoComplete="city"
          placeholder="إسم المدينة"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          required="required"
          onChange={handleCityChange}
          >
         {gadm41_YEM_1.features.map((city,index)=>{
      return (
      <option key={index} value={city['properties']['NL_NAME_1']} 
      >{city['properties']['NL_NAME_1']}</option>
      )
      })}
        </Select>
      </FormControl>
      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          htmlFor="city"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}>
                  إسم المديرية
        </FormLabel>
        <Select
          id="city"
          name="city"
          autoComplete="city"
          placeholder="            إسم المديرية"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          required="required"
          onChange={handleStateChange}
          >
         {yemenGis.features.filter(Directorate => 
            Directorate['properties']['NL_NAME_1'] ==city
        ).map((Directorate,index) =>(
          <option key={index} value={Directorate['properties']['NL_NAME_2']}>{Directorate['properties']['NL_NAME_2']}</option>
        ))
        }
        </Select>
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="District"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
                إسم المنطقة/الحي
        </FormLabel>
        <Input
          type="text"
          name="District"
          id="District"
          autoComplete="city"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          placeholder='مثال: سعوان , السنينة , المطار'
        />
      </FormControl>
      <FormControl as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="street_address"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
      إسم الشارع
        </FormLabel>
        <Input
          type="text"
          name="street_address"
          id="street_address"
          autoComplete="street-address"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          placeholder='مثال: شارع الستين, التحرير, شارع الثلاثين'
        />
      </FormControl>

    </>
  );
};

const Form2 = () => {
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal">
        Social Handles
      </Heading>
      <SimpleGrid columns={1} spacing={6}>
      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="District"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          عنوان الإعلان بالعربي
        </FormLabel>
        <Input
          type="text"
          name="District"
          id="District"
          autoComplete="city"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>
      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="District"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          رابط الفيديو للعقار على اليوتيوب
        </FormLabel>
        <Input
          type="text"
          name="District"
          id="District"
          autoComplete="city"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          placeholder='https://www.youtube.com/watch?v=MGrQa4ElR8M'
        />
      </FormControl>

        <FormControl as={GridItem} id="email" mt={1}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            التفاصيل الكاملة للعقار
          </FormLabel>
          <Textarea
          
            rows={4}
            shadow="sm"
            focusBorderColor="brand.400"
            fontSize={{
              sm: 'sm',
            }}
          />
          <FormHelperText>
          التفاصيل الكاملة للعقار
          </FormHelperText>
        </FormControl>
      </SimpleGrid>
    </>
  );
};
const Form3 = () => {
  const [selectView ,setSelectView] =useState()

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const handleViewChange = (e)=>{
    setSelectView(e.target.value)
  }
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
      وصف العقار
      </Heading>
      <Flex>
        <FormControl>
          <FormLabel htmlFor="space" fontWeight={'normal'}>
          المساحة بالمتر
          </FormLabel>
          <Input type="number" id="space" placeholder="المساحة" />
        </FormControl>
        <FormControl>
        <FormLabel htmlFor="view" fontWeight={'normal'}>
          الإطلالة
          </FormLabel>
        <Select
          direction="rtl"
          id="typeProperty"
          name="typeProperty"
          autoComplete="typeProperty"
          placeholder=" نوع العقار"
          focusBorderColor="brand.400"
          shadow="sm"
          size="md"
          w="full"
          rounded="md"
          onChange={handleViewChange}
          >
          {viewList.map((propertyview)=>{
        return (
            <option key={propertyview} value={propertyview} >{propertyview}</option>
        )
  })}
        </Select>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="price" fontWeight={'normal'}>
            السعر بالريال اليمني
          </FormLabel>
          <Input id="price" placeholder="price" />
        </FormControl>
      </Flex>
      <Flex>
      <FormControl>
        <FormLabel htmlFor="view" fontWeight={'normal'}>
          الإطلالة
          </FormLabel>
        <Select
          direction="rtl"
          id="typeProperty"
          name="typeProperty"
          autoComplete="typeProperty"
          placeholder=" نوع العقار"
          focusBorderColor="brand.400"
          shadow="sm"
          size="md"
          w="full"
          rounded="md"
          onChange={handleViewChange}
          >
          {viewList.map((propertyview)=>{
        return (
            <option key={propertyview} value={propertyview} >{propertyview}</option>
        )
      })}
        </Select>
      </FormControl>
      </Flex>
      <FormControl mt="2%">
        <FormLabel htmlFor="email" fontWeight={'normal'}>
          Email address
        </FormLabel>
        <Input id="email" type="email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="password" fontWeight={'normal'} mt="2%">
          Password
        </FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? 'text' : 'password'}
            placeholder="Enter password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </>
  );
};

export default function Multistep() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form">
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated></Progress>
        {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%">
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="teal"
                variant="outline">
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={() => {
                  toast({
                    title: 'Account created.',
                    description: "We've created your account for you.",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                  });
                }}>
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}