import { Icon, HStack, VStack, Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { RiAlertFill } from "react-icons/ri";
import { IoAlertCircle } from "react-icons/io5";

function Notifications() {
    return (
        <Box w="26rem" h="100vh" pt="50px">
            <VStack spacing="20px" align="stretch">
                <Heading as="h1" size="md" fontWeight="600">
                    Notifications
                </Heading>
                <Box
                    borderRadius="20px"
                    bg="white"
                    boxShadow="xl"
                    pl={2}
                    pr={5}
                    py={4}
                >
                    <HStack align="flex-start">
                        <Icon
                            as={RiAlertFill}
                            w="32px"
                            h="32px"
                            color="red"
                            ml="5px"
                            mt={2}
                        />
                        <Box>
                            <Text fontSize="md" fontWeight="semibold">
                                Une fuite a été détectée.
                            </Text>
                            <Text fontSize="sm">
                                Veuillez intervenir au plus tôt possible.
                            </Text>
                            <Text color="grey" fontSize="xs" mt={2}>
                                Mardi 12 Novembre, 13h00
                            </Text>
                            <Text
                                fontSize="sm"
                                fontWeight="semibold"
                                align="right"
                                mt={2}
                            >
                                Marquer comme lu
                            </Text>
                        </Box>
                    </HStack>
                </Box>

                <Box
                    borderRadius="20px"
                    bg="white"
                    boxShadow="xl"
                    pl={2}
                    pr={5}
                    py={4}
                >
                    <HStack align="flex-start">
                        <Icon
                            as={IoAlertCircle}
                            w="32px"
                            h="32px"
                            color="#FFC700"
                            ml="5px"
                            mt={2}
                        />
                        <Box>
                            <Text fontSize="md" fontWeight="semibold">
                                La qualité de l'eau n'est pas optimale.
                            </Text>

                            <Text color="grey" fontSize="xs" mt={2}>
                                Mardi 12 Novembre, 13h00
                            </Text>
                            <Text
                                fontSize="sm"
                                fontWeight="semibold"
                                align="right"
                                mt={2}
                            >
                                Marquer comme lu
                            </Text>
                        </Box>
                    </HStack>
                </Box>
            </VStack>
        </Box>
    );
}

export default Notifications;
