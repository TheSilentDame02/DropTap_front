import { Image, Box, Flex, Heading, Center, Spacer } from "@chakra-ui/react";
import React from "react";
import Clock from "./Clock.js";

function Header() {
    return (
        <Box mt={5}>
            <Flex
                className="headerflex"
                flexDirection="row"
                w="75vw"
                h="70px"
                
                justifyContent="space-between"
            >
                {/* <Image
                borderRadius="full"
                boxSize="70px"
                src="https://hwchamber.co.uk/wp-content/uploads/2022/04/avatar-placeholder.gif"
                alt="profile-pic"
                mr="5"
            /> */}
                <Heading size="lg" fontWeight="500">
                    Hello, User
                </Heading>
                <Clock />
            </Flex>
        </Box>
    );
}

export default Header;
