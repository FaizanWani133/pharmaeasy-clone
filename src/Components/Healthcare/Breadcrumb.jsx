import { ChevronRightIcon } from '@chakra-ui/icons'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function HealthCareBreadcrumb() {
  return (
    <Breadcrumb mt="50px"   fontSize="12px" spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
  <BreadcrumbItem>
    <BreadcrumbLink _hover={{textDecoration:"none"}} ><Link className='link' to={"/"}>Home</Link></BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink _hover={{textDecoration:"none"}}  >Healthcare</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
    
  )
}

export default HealthCareBreadcrumb