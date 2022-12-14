import { Box, Center, VStack, HStack, Heading, FormControl, Button} from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { InputGroup, InputRightElement } from '@chakra-ui/react';
import { BiShowAlt, BiHide } from 'react-icons/bi';
import { ReactComponent as Logo } from '../../Assets/Images/logo.svg';
import '../../Assets/Styles/Login.css';
import { Navigate } from 'react-router-dom';

import React, { useEffect, useRef, useState } from "react";
import AuthService from "../../Services/auth.service";

export default function Login(){
    const loginRef = useRef();
    const errorRef = useRef();

    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);


    const [login,setLogin] = React.useState("");
    const [password,setPassword] = React.useState("");
    const [errorMsg,setErrorMsg] = useState("");

    useEffect(() => {
        loginRef.current.focus();
    },[])

    useEffect(() => {
        setErrorMsg("");
    },[login,password])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(login, password);
        AuthService.login(login, password).then(
            () => {
                console.log("login success")

                // lien dyal page d'acceuil + khass yt9ado les routes
                window.location.href = '/'
            },
            error => {
                console.log("login failed")
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

            }
        );

    }

    return (
        <>

        <Center h='100vh'>
        <HStack spacing={0} >
        <Box 
            w={['full', 'sm']} 
            h='400px'
            p={[8, 10]}
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
            <p ref={errorRef} className={errorMsg ? "errormsg" : "offscreen"} aria-live="assertive"> {errorMsg} </p>
            </VStack>
        <FormControl>
            <Input
                ref={loginRef}
                value={login} 
                type='text' 
                variant='filled' placeholder='Login' mt='4' borderRadius={17} 
                onChange={(e)=>setLogin(e.target.value)}
                required/>
            <InputGroup size='md'>
                <Input 
                    pr='4.5rem' 
                    value={password} 
                    onChange={(e)=>setPassword(e.target.value)}
                    type={show ? 'text' : 'password'} 
                    placeholder='Mot de passe' variant='filled' mt='5' borderRadius={17} required/>
                <InputRightElement w='4.5rem' mt='5'>
                <Button h='1.75rem' size='sm' bg='gray.300' borderRadius={17} onClick={handleClick}>
                    {show ? <BiHide /> : <BiShowAlt /> }
                </Button>
                </InputRightElement>
            </InputGroup>
            <VStack justify='center' mt='5'> 
            <Button variant='link' colorScheme='blue'>
                Mot de passe oublié?
            </Button>
            <Button type="submit" colorScheme='blue' 
                w='60%' borderRadius={17} onClick={handleSubmit}>
                Se connecter
            </Button>
            </VStack>          
        </FormControl>
        </VStack>
        </Box>
        <Box id="bg" borderRightRadius={10}>
            <div style={{height:'400px', width:'200px'}} ></div>
        </Box>
        </HStack>
        </Center>
</>
    );
}

