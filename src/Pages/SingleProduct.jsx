import { Box } from '@chakra-ui/react';
import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function SingleProduct() {
    const {id} = useParams();

    useEffect(()=>{

        axios.get(`http://localhost:3001/Products/${id}`).then(res=>console.log(res));

    },[])
    useEffect(()=>{
        window.scrollTo(0,0)
      },[])
  return (
    <Box></Box>
    
  )
}

export default SingleProduct