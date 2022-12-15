import { Box, Grid, GridItem ,Table,Td,Tr,Switch,Heading,Button,Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,useDisclosure, FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
Input,Text,
InputRightElement,InputGroup, effect} from '@chakra-ui/react'
import Notifications from "../Components/Notifications";
import { CiEdit } from "react-icons/ci";
import { IoTrendingUp } from 'react-icons/io5';
import '../Assets/Styles/Settings.css';
import React, {useState, useEffect, useCallback} from "react";
import Api from "../services/api";


let data={}

Api.getSeuilByType("jour").then((response)=>{
  data = response.data; 
});

function Seuil(object, inputseuil){
  object.valeur = inputseuil;
  Api.updateValeurSeuil(object.id, object);
}



const Settings = () => {
    // const { isOpen, onOpen, onClose } = useDisclosure();
    //Modal's function

    useEffect(() => {
        setTimeout(()=>{
            setSeuilJour(data.valeur);
            setNewSeuil(data);
        },1000)

    }, []);
    

    const { isOpen: isFirstModalOpen , onOpen: onFirstModalOpen, onClose: onFirstModalClose } = useDisclosure();
    const { isOpen: isSecondModalOpen , onOpen: onSecondModalOpen, onClose: onSecondModalClose } = useDisclosure();

    
    
    const [seuilJour, setSeuilJour] = useState(0);
    const [newSeuil, setNewSeuil] = useState(data);
    const [inputSeuil, setInputSeuil] = useState(0);

    const [state, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    function handleSave(){
      Seuil(newSeuil, inputSeuil);
      setSeuilJour(inputSeuil);
      onSecondModalClose();
    }


    

    //Password Input Variables;
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
    return ( 
        <>
        <br></br>
        {/* Grid */}
        <Grid templateColumns='repeat(9, 1fr)' templateRows='repeat(20, 1fr)' gap={4} >
            <GridItem colSpan={6} rowSpan={1}>
                <Heading as="h1" size="md" fontWeight="600">
                    Settings
                </Heading>
            </GridItem>
            <GridItem colSpan={3} rowSpan={1}>
            <Heading as="h1" size="md" fontWeight="600">
                    Notifications
                </Heading>
            </GridItem>
            <GridItem colSpan={6} rowSpan={19}>
                
                <Box w='100%' p={8} bg="white" borderRadius="20px" >
                    <div className='profile'>
                    <Heading as="h3" size="sm" fontWeight="600">
                    First Name Last Name/Product code
                </Heading>
                <Text>E-mail</Text>
                {/* Modification des Parametres */}
                <div >
                <Button borderRadius={"20px"} bg="transparent" onClick={onFirstModalOpen} ><CiEdit /></Button>
                <Modal isOpen={isFirstModalOpen} onClose={onFirstModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Formulaire de modification */}
          <FormControl>
          <FormLabel>Product code</FormLabel>
  <Input type='text'  value={"qwert12345678"} isDisabled={true}/>
  <FormHelperText>Your product code. It is not changeable</FormHelperText><br/>
  <FormLabel>E-mail</FormLabel>
  <Input type='text' placeholder='E-mail'/>
  <FormHelperText>Your email will be used to reset your password.</FormHelperText><br/>
  <FormLabel>Password</FormLabel>
  <InputGroup size='md'>
  <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
      </InputGroup>
  <FormHelperText>Change password</FormHelperText>
</FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onFirstModalClose}>
              Close
            </Button>
            {/* Saving process Hadchi dnass dl back */}
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
                </div>
                
                    </div>
                    <Table>
                    <Heading as="h1" size="md" fontWeight="600">
                    Technical settings
                </Heading>
                <br/>
                        <Tr>
                            <Td>Leak detection</Td>
                            <Td><Switch></Switch></Td>
                        </Tr>
                        <Tr>
                            <Td>Water shutoff</Td>
                            <Td><Switch></Switch></Td>
                        </Tr>
                        <Tr>
                            <Td>Consumption limit</Td>
                            <Td>{seuilJour}L <Button bg="transparent" onClick={onSecondModalOpen}><CiEdit /></Button>
                            <Modal blockScrollOnMount={false} isOpen={isSecondModalOpen} onClose={onSecondModalClose} closeOnOverlayClick={false} >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Consumption limit</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <FormControl>
  <FormLabel>Consumption limit</FormLabel>
  <Input type='text' placeholder={seuilJour} onChange={(e)=>setInputSeuil(e.target.value)} />
  <FormHelperText>Please set your daily consumption limit</FormHelperText>
</FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onSecondModalClose}>
              Discard
            </Button>
            <Button variant='ghost' onClick={()=>handleSave()} >Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
                            </Td>
                        </Tr>
                        <br/>
                        <Heading as="h1" size="md" fontWeight="600">Notification settings</Heading>
                <br/>
                <Tr>
                            <Td>Leak alert</Td>
                            <Td><Switch></Switch></Td>
                        </Tr>
                        <Tr>
                            <Td>Consumption limit alert</Td>
                            <Td><Switch></Switch></Td>
                        </Tr>
                        <Tr>
                            <Td>Water quality alert</Td>
                            <Td><Switch></Switch></Td>
                        </Tr><br/>
                        <Heading as="h1" size="md" fontWeight="600">General</Heading>
                <br/>
                <Tr>
                    <Td>Contact us</Td>
                    <Td></Td>
                    </Tr>
                        <Tr>
                            <Td>Terms and conditions</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>Privacy policy</Td>
                            <Td></Td>
                        </Tr>
                    </Table>
                </Box>
            </GridItem>
            <GridItem colSpan={3} rowSpan={19}>
                <Notifications/>
            </GridItem>
        </Grid>
        </>
     );
}
export default Settings;