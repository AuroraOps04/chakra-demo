import {
  BreadcrumbItem,
  BreadcrumbLink,
  Breadcrumb as ChakraBreadcrumb,
} from '@chakra-ui/react'

const Breadcrumb = () => {
  return (
    <ChakraBreadcrumb separator="/">
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Docs</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage color="slate.400">
        <BreadcrumbLink href="#">Breadcrumb</BreadcrumbLink>
      </BreadcrumbItem>
    </ChakraBreadcrumb>
  )
}

export default Breadcrumb
