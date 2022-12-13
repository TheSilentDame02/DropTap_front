import { Box, Grid, GridItem ,Table,Td,Tr,Switch,Heading,Button,Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,useDisclosure, FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
Input,Text,
InputRightElement,InputGroup} from '@chakra-ui/react'
import Notifications from "../Components/Notifications";
import { CiEdit } from "react-icons/ci";
import { IoTrendingUp } from 'react-icons/io5';
import '../Assets/Styles/Settings.css';
import React from "react";

const Settings = () => {
    // const { isOpen, onOpen, onClose } = useDisclosure();
    //Modal's function
    const { isOpen: isFirstModalOpen , onOpen: onFirstModalOpen, onClose: onFirstModalClose } = useDisclosure();
    const { isOpen: isSecondModalOpen , onOpen: onSecondModalOpen, onClose: onSecondModalClose } = useDisclosure();
    //Password Input Variables;
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    return ( 
        <>
        <br></br>
        {/* Grid */}
        <Grid templateColumns='repeat(9, 1fr)' templateRows='repeat(20, 1fr)' gap={4} >
            <GridItem colSpan={6} rowSpan={1}>
                <Heading as="h1" size="md" fontWeight="600">
                    Parametres
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
                    Nom Prenom/Code du produit
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
          <FormLabel>Code Produit</FormLabel>
  <Input type='text'  value={"qwert12345678"} isDisabled={true}/>
  <FormHelperText>Code de votre produit il n'est pas modifiable</FormHelperText><br/>
  <FormLabel>E-mail</FormLabel>
  <Input type='text' placeholder='E-mail'/>
  <FormHelperText>Votre email sera utilise pour la recuperation de votre mot de passe</FormHelperText><br/>
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
  <FormHelperText>Modifier le mot de passe</FormHelperText>
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
                    Parametres technique
                </Heading>
                <br/>
                        <Tr>
                            <Td>Detection de fuite</Td>
                            <Td><Switch></Switch></Td>
                        </Tr>
                        <Tr>
                            <Td>Remote-Robinet</Td>
                            <Td><Switch></Switch></Td>
                        </Tr>
                        <Tr>
                            <Td>Seuil de consommation</Td>
                            <Td>200L <Button bg="transparent" onClick={onSecondModalOpen}><CiEdit /></Button>
                            <Modal blockScrollOnMount={false} isOpen={isSecondModalOpen} onClose={onSecondModalClose} closeOnOverlayClick={false} >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Seuil de Consommation</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <FormControl>
  <FormLabel>Seuil de consommation</FormLabel>
  <Input type='text' placeholder='200' />
  <FormHelperText>Veuillez entrez la consommation du mois</FormHelperText>
</FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onSecondModalClose}>
              Discard
            </Button>
            <Button variant='ghost'>Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
                            </Td>
                        </Tr>
                        <br/>
                        <Heading as="h1" size="md" fontWeight="600">Parametres de Notifications</Heading>
                <br/>
                <Tr>
                            <Td>Alerte de fuite</Td>
                            <Td><Switch></Switch></Td>
                        </Tr>
                        <Tr>
                            <Td>Alerte de seuil</Td>
                            <Td><Switch></Switch></Td>
                        </Tr>
                        <Tr>
                            <Td>Alerte qualite</Td>
                            <Td><Switch></Switch></Td>
                        </Tr><br/>
                        <Heading as="h1" size="md" fontWeight="600">General</Heading>
                <br/>
                <Tr>
                    <Td>Contactez-nous</Td>
                    <Td></Td>
                    </Tr>
                        <Tr>
                            <Td>Termes et conditions</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>Politique de confidentialite</Td>
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