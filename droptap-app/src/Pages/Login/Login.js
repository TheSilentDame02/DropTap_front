import { Box, Center, VStack, HStack, Heading, FormControl, Button} from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { InputGroup, InputRightElement } from '@chakra-ui/react';
import { BiShowAlt, BiHide } from 'react-icons/bi';
import { ReactComponent as Logo } from '../../Assets/Images/logo.svg';
import '../../Assets/Styles/Login.css';


import React from "react";

export default function Login(){
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    return (
        <Center h='100vh'>
        <HStack spacing={0} >
        <Box 
            w={['full', 'sm']} 
            h='400px'
            p={[8, 10]}
            // borderLeft='1px' 
            // borderTop='1px'
            // borderBottom='1px'
            boxShadow='2xl' 
            rounded='md' 
            bg='white'
            borderColor={['', 'gray.300']}
            borderLeftRadius={10}
            borderRightRadius={0}
            backgroundColor='rgba(255,255,255,0.7)'
        >
        <VStack spacing={4} w='full'>
            <VStack spacing={1} align={['flex-start','center']} w='full'>
            <Heading w='40'><Logo/></Heading>
            </VStack>
        <FormControl>
            <Input type='email' variant='filled' placeholder='Login' mt='4' borderRadius={17} required/>
            <InputGroup size='md'>
                <Input pr='4.5rem' type={show ? 'text' : 'password'} placeholder='Mot de passe' variant='filled' mt='5' borderRadius={17} required/>
                <InputRightElement w='4.5rem' mt='5'>
                <Button h='1.75rem' size='sm' bg='gray.300' borderRadius={17} onClick={handleClick}>
                    {show ? <BiHide /> : <BiShowAlt /> }
                </Button>
                </InputRightElement>
            </InputGroup>           
        </FormControl>
        <HStack justify='center' mt='5'> 
            <Button variant='link' colorScheme='blue'>
                Mot de passe oublié?
            </Button>
        </HStack>
        <Button colorScheme='blue' w='60%' borderRadius={17}>
            Se connecter
        </Button>
        </VStack>
        </Box>
        <Box id="bg" borderRightRadius={10}>
            <div style={{height:'400px', width:'200px'}} ></div>
        </Box>
        </HStack>
        </Center>
    );
}