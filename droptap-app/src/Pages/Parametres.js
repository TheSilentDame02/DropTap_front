import { Box, Grid, GridItem ,Table,Th,Td,Tr,Switch,Heading,Stack, HStack, VStack} from '@chakra-ui/react'
import Notifications from "../Components/Notifications";

const Settings = () => {
    return ( 
        <>
        <Grid templateColumns='repeat(8, 1fr)' templateRows='repeat(20, 1fr)' gap={4} >
            <GridItem colSpan={6} rowSpan={1}>
                <Heading as="h1" size="md" fontWeight="600">
                    Parametres
                </Heading>
            </GridItem>
            <GridItem colSpan={6} rowSpan={19}>
                
                <Box w='100%' p={8} bg="white" borderRadius="20px" >
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
                            <Td>200L</Td>
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
            <GridItem colSpan={2} rowSpan={1}>
            <Heading as="h1" size="md" fontWeight="600">
                    Notifications
                </Heading>
            </GridItem>
            <GridItem colSpan={2} rowSpan={19}>
                <Notifications/>
            </GridItem>
        </Grid>
        </>
     );
}
 
export default Settings;