import axios from 'axios';
import React from 'react'
import { Box } from '@chakra-ui/react';
import { useState,useEffect } from 'react';
import { fetchApi,createApi, fetchApi2 } from '../utils/fetchApi';
import Form1 from "../components/MultiSteps";
import typeProperty from "../utils/selectedData";
import yemenGis from "../utils/yemenGis.json"
import gadm41_YEM_1 from "../utils/gadm41_YEM_1.json";

const create = () => {
  // const [city , setCity] = useState("")
  // const [state , setState] = useState("")
  // const [typedata,setTypedata] = useState(typeProperty);
  // const [person,setPerson] = useState()
  // const [loading,setLoading] = useState(false)
  // const [allcountries,setAllcountries] = useState([])
//   const handleSubmit = async (event) => {

//         // Stop the form from submitting and refreshing the page.
//         event.preventDefault()
  
//         // Get data from the form.
//         const data = {
//           first: event.target.first.value,
//           last: event.target.last.value,
//         }
//         // const apiToken = 'aa9bb05f6262e9689e7e6b3f204bfc460c0f6b90'

//   //   const asyncData = async () =>{
//   //     try{
//   //       const response = await fetch('http://127.0.0.1:8000/api/list-persons/',{
//   //       method:'POST',
//   //       credentials: "include",
//   //       headers: {
//   //         "Accept": "application/json",
//   //         'Content-Type': 'application/json',
//   //         'Authorization': `Token ${apiToken}`
//   //       },
//   //       body: JSON.stringify(data)
//   //     })
//   //     const newdata = await response.text();
//   //     console.log(newdata)
//   //   }catch(error) {
//   //     console.log(error)
//   //   }
//   // }
//   // asyncData()
//   //     }
//   const handleCityChange = (e)=>{
//     setCity(e.target.value)
//   }
//   const handleStateChange = (e)=>{
//     setState(e.target.value)
//   }
  
  return (

    <Box>
    <Form1/>
    </Box>
  )
}

export default create

// export async function getStaticProps() {
//   const data =await fetchApi('http://127.0.0.1:8000/api/list-persons/')
//  return {
//     props:{
//       data:data?.results
//     }
//   }
// }