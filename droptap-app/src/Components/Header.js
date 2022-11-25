import { Box, Heading, Center } from "@chakra-ui/react";
import React from "react";

function Header() {
    return (
        <Box h="90px">
            <Heading as='h1' size='lg' fontWeight='500'>
                <Center h="90px">DropTap</Center>
            </Heading>
        </Box>
    );
}

export default Header;
