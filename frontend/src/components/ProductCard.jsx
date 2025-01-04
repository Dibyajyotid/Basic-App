import { Box, Button, Heading, HStack, IconButton, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useColorModeValue, useDisclosure, useToast, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FileEdit, Trash2 } from 'lucide-react'
import { useProductStore } from '../store/product'

const ProductCard = ({product}) => {
    const textColor = useColorModeValue("gray.600", "cyan.600")
    const bg = useColorModeValue("white", "gray.800")

    const [ updatedProduct, setUpdatedProduct ] = useState(product)
    const { deleteProduct, updateProduct } = useProductStore()
    const toast = useToast()
    const { isOpen, onClose, onOpen } = useDisclosure()
    
 
    const handleDeleteProduct = async (pid) => {
        const {success, message} = await deleteProduct(pid)
        if(!success){
            toast({
                title: 'Error',
                description: message,
                status: 'error',
                duration: 3000,
                isClosable: true,
            })
        } else {
            toast({
                title: 'Success',
                description: message,
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
        }
    }

    const handleUpdateProduct = async (pid, updatedProduct) => {
        const { success, message } = await updateProduct(pid, updatedProduct);
        onClose();
        console.log("Modal closed")
        if(!success){
            toast({
                title: "Error",
                description: message,
                status: 'error',
                duration: 3000,
                isClosable: true,
            })
        } else {
            toast({
                title: 'Success',
                description: "Product Updated Successfully",
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
        }
    }

    return (
    <Box className='shadow-lg rounded-lg overflow-hidden' transition={'all 0.3s'} _hover={{ transform: "translateY(-5px)", shadow: "xl" }} bg={bg}>
        <Image src={product.image} alt={product.name} h={48} w={'full'} objectFit={'cover'} />
        <Box p={4}>
            <Heading as={'h3'} size={'md'} mb={2}>
                {product.name}
            </Heading>

            <Text fontWeight={'bold'} fontSize={'xl'} color={textColor} mb={4}>
                {product.price}
            </Text>

            <HStack spacing={2} justifyContent={'space-between'}>
                {/* <div className='btn w-24 shadow-lg hover:-translate-y-0.5 hover:shadow-xl rounded-lg'><FileEdit /></div>
                <div className='btn w-24 shadow-lg hover:-translate-y-0.5 hover:shadow-xl rounded-lg'><Trash2 /></div> */}
                <IconButton  shadow={'2xl'} transition={'all 0.3s'} _hover={{ transform: "translateY(-5px)", shadow: "xl" }} w={24} icon={<FileEdit />} onClick={onOpen} colorScheme='blue' />
                <IconButton  shadow={'2xl'} transition={'all 0.3s'} _hover={{ transform: "translateY(-5px)", shadow: "xl" }}  w={24} icon={<Trash2 />} onClick={() => handleDeleteProduct(product._id)} colorScheme='red' />
            </HStack>
        </Box>

        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />

            <ModalContent>
                <ModalHeader>Update Product</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <VStack spacing={4}>
                        <Input placeholder='Product Name' name='name' value={updatedProduct.name} onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })} />
                        <Input placeholder='Product Price' name='price' value={updatedProduct.price} onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })} />
                        <Input placeholder='Product Image URL' name='image' value={updatedProduct.image} onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })} />
                    </VStack>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={() => handleUpdateProduct(product._id, updatedProduct)}>Update</Button>
                    <Button variant={'ghost'} onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </Box>
  )
}

export default ProductCard