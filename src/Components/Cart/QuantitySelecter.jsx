import { Select } from '@chakra-ui/react'
import React from 'react'

function QuantitySelecter() {
  return (
    <Select width="100px" colorScheme={"teal"} fontWeight={"500"} placeholder='Qty'>
  <option value='1'>1</option>
  <option value='2'>2</option>
  <option value='3'>3</option>
  <option value='4'>4</option>
  <option value='5'>5</option>
  <option value='6'>6</option>
  <option value='7'>7</option>
  <option value='8'>8</option>
  <option value='9'>9</option>
</Select>
  )
}

export default QuantitySelecter