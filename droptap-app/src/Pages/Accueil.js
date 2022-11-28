import { GridItem, Box, Heading, VStack, Text } from "@chakra-ui/react";
import React from "react";
import Notifications from "../Components/Notifications";

function Accueil() {
    const date = new Date().toLocaleString("fr-FR", {
        weekday: "long",
        day: "numeric",
        month: "long",
    });

    return (
        <>
        <GridItem colSpan={5} rowSpan={1}>
                        <Heading as="h1" size="md" fontWeight="600">
                            Ma consommation
                        </Heading>
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1}>
                        <Heading as="h1" size="md" fontWeight="600">
                            Notifications
                        </Heading>
                    </GridItem>
                    <GridItem colSpan={2} rowSpan={2}>
                        <Box
                            boxShadow="xl"
                            p="8"
                            h="100%"
                            borderRadius="20px"
                            bg="white"
                        >
                            <Text>box</Text>
                        </Box>
                    </GridItem>

                    <GridItem colSpan={2} rowSpan={2}>
                        <Box
                            boxShadow="xl"
                            p="8"
                            h="100%"
                            borderRadius="20px"
                            bg="white"
                        >
                            <Text>box</Text>
                        </Box>
                    </GridItem>
                    <GridItem>
                        <Box
                            boxShadow="xl"
                            p="8"
                            h="100%"
                            borderRadius="20px"
                            bg="white"
                        >
                            <Text>button 1</Text>
                        </Box>
                    </GridItem>

                    <GridItem colSpan={1} rowSpan={2}>
                        <Notifications />
                    </GridItem>

                    <GridItem>
                        <Box
                            boxShadow="xl"
                            p="8"
                            h="100%"
                            borderRadius="20px"
                            bg="white"
                        >
                            <Text>button 2</Text>
                        </Box>
                    </GridItem>

                    <GridItem colSpan={3} rowSpan={1}>
                        <Heading as="h1" size="md" fontWeight="600">
                            Qualité de l'eau
                        </Heading>
                    </GridItem>

                    <GridItem colSpan={3} rowSpan={1}>
                        <Heading as="h1" size="md" fontWeight="600">
                            Statistiques
                        </Heading>
                    </GridItem>

                    <GridItem colSpan={3} rowSpan={1}>
                        <Box
                            boxShadow="xl"
                            p="8"
                            h="100%"
                            borderRadius="20px"
                            bg="white"
                        >
                            <Text>box</Text>
                        </Box>
                    </GridItem>

                    <GridItem colSpan={3} rowSpan={2}>
                        <Box
                            boxShadow="xl"
                            p="8"
                            h="100%"
                            borderRadius="20px"
                            bg="white"
                            mb={5}
                        >
                            <Text>box stat</Text>
                        </Box>
                    </GridItem>

                    <GridItem colSpan={3} rowSpan={1}>
                        <Box
                            boxShadow="xl"
                            p="8"
                            h="100%"
                            borderRadius="20px"
                            bg="lightBlue"
                        >
                            <Text>tip</Text>
                        </Box>
                    </GridItem>
                    </>
    );
}

export default Accueil;
