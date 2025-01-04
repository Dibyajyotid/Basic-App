import { Button, Container, Flex, Text, HStack, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { PackagePlus, Sunrise, Sunset } from 'lucide-react'

const Navbar = () => {

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Container maxW={"1280px"} className='px-4 shadow-xl rounded-lg'>
      <Flex className='h-16 items-center justify-between' flexDirection={{
        base:"column",
        sm:"row"
      }}>
        <Text fontSize={{ base:"22", sm:"28" }} className="font-bold uppercase text-center" bgGradient={"linear(to-r, cyan.400, blue.500)"} bgClip={"text"}>
          <Link to={"/"}> Store </Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>

          <Link to={"/about"}>
            <Button className='shadow-lg'>
              About
            </Button>
          </Link>

          <Link to={"/create"}>
            <Button className='shadow-lg'>
              <PackagePlus />
            </Button>
          </Link>

          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <Sunset /> : <Sunrise />}
          </Button>
        </HStack>

      </Flex>
    </Container>
  )
}

export default Navbar