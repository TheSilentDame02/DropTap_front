import { Box, Grid, GridItem ,Table,Td,Tr,Switch,Heading,Button,Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,useDisclosure, FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
Input,Text} from '@chakra-ui/react'
import Notifications from "../Components/Notifications";
import { CiEdit } from "react-icons/ci";
import { IoTrendingUp } from 'react-icons/io5';
import '../Assets/Styles/Settings.css';


const Settings = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return ( 
        <>
        <br></br>
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
                <div >
                <Button borderRadius={"20px"} bg="trasparent"><CiEdit /></Button>
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
                            <Td>200L <Button bg="transparent" onClick={onOpen}><CiEdit /></Button>
                            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false} >
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
            <Button colorScheme='blue' mr={3} onClick={onClose}>
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
                    </Tr>
                        <Tr>
                            <Td>Termes et conditions</Td>
                        </Tr>
                        <Tr>
                            <Td>Politique de confidentialite</Td>
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