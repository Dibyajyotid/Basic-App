import { Box, Button, Container, Input, useColorModeValue, useToast, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useProductStore } from '../store/product'

const CreatePage = () => {

  const [ newProduct, setNewProduct ] = useState({
    name:"",
    price: "",
    image: "",
  })

  const toast = useToast()
  const {createProduct} = useProductStore()
  const handleAddProduct = async () => {
    console.log(newProduct)

    const {success, message} = await createProduct(newProduct)
    if(!success){
      toast({
        title:"Error",
        description:message,
        status:"error",
        isClosable: true
      })
    } else {
      toast({
        title:"Success",
        description:message,
        status:"success",
        isClosable: true
      })
    }

    setNewProduct({ name:"", price:"", image:"" }) //resetting the state to null
  }

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <h1 className='text-2xl text-center mt-3 mb-8'>
          Create New Product
        </h1>

        <Box w={"full"} bg={useColorModeValue("white", "gray.800")} className='p-6 rounded-lg shadow-lg'>
          <VStack spacing={4}>
            <Input placeholder='Product Name' name='name' value={newProduct.name} onChange={(e) => setNewProduct({...newProduct, name: e.target.value })} />
            <Input placeholder='Product Price' name='price' type='number' value={newProduct.price} onChange={(e) => setNewProduct({...newProduct, price: e.target.value })} />
            <Input placeholder='Product Image Link' name='image' value={newProduct.image} onChange={(e) => setNewProduct({...newProduct, image: e.target.value })} />
            <Button bgGradient={"linear(to-r, cyan.400, blue.700)"} _hover={{ bgGradient: 'linear(to-r, cyan.400, blue.500)' }} className='w-full btn shadow-lg' onClick={handleAddProduct}>Add Product</Button>
          </VStack>
        </Box> 
      </VStack>
    </Container>
  )
}

export default CreatePage