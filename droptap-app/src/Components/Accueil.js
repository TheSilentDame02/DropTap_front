import { Box, Heading, VStack, Text } from "@chakra-ui/react";
import React from "react";

function Accueil() {
    const date = new Date().toLocaleString("fr-FR", {
        weekday: "long",
        day: "numeric",
        month: "long",
    });

    return (
        <Box boxShadow="xl" p="8" borderRadius="30px" bg="white" h="400px">
            <Heading as="h1" size="md" fontWeight="600">
                Ma consommation
                <VStack>
                    <Text>Aujourd'hui</Text>
                    <Text fontSize="md" color="grey" fontWeight="400">
                        {date}
                    </Text>
                </VStack>
            </Heading>
        </Box>
    );
}

export default Accueil;
