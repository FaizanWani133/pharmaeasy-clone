import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Search() {
 const {name} = useParams();
console.log(name);

 useEffect(()=>{
  axios.get(`http://localhost:3001/Products?q=${name}`).then(res=>console.log(res))
 },[name])

  return (
    <div>Search</div>
  )
}

export default Search