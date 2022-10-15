const SingleProductBreadCumb = () => {
    return (
    <Breadcrumb  fontSize="12px"spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
      <BreadcrumbItem>
        <BreadcrumbLink  ><Link to={"/"}>Home</Link></BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem >
        <BreadcrumbLink ><Link to={"/healthcare"}>Healthcare</Link></BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink >{cat}</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
    )
}