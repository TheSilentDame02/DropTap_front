import { Flex, Link, Box, Image, VStack, Text, Icon } from "@chakra-ui/react";
import React from "react";
import {
    BiHome,
    BiSliderAlt,
    BiLogOut,
    BiBarChartSquare,
} from "react-icons/bi";
import { NavLink } from "react-router-dom";

const LinkItems = [
    { name: "Accueil", icon: BiHome, path: "/home" },
    { name: "Rapport", icon: BiBarChartSquare, path: "/rapport" },
    { name: "Paramètres", icon: BiSliderAlt, path: "/settings" },
    { name: "Se déconnecter", icon: BiLogOut, path: "logout" },
];

const NavItem = ({ name, icon, path, children, ...props }) => {
    return (
        <Link
            href={path}
            style={{ textDecoration: "none" }}
            _focus={{ boxShadow: "none" }}
        >
            <Flex
                align="center"
                py="3"
                px="2"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: "#55C2FF",
                    color: "white",
                }}
                {...props}
            >
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: "white",
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Link>
    );
};

function Sidebar() {
    return (
        <Box bg="rgba(255,255,255, 0.5)" w="18rem" h="100vh" py={4} px={5}>
            <VStack ml="2" mt="6" mb='3' align="stretch">
                <Image
                    borderRadius="full"
                    boxSize="70px"
                    src="https://hwchamber.co.uk/wp-content/uploads/2022/04/avatar-placeholder.gif"
                    alt="profile-pic"
                    mb="2"
                />
                <Text fontSize="xl">
                    Bonjour,{" "}
                    <Text as="span" fontWeight="600">
                        User
                    </Text>
                    .
                </Text>
            </VStack>

            {LinkItems.map((link) => (
                <NavItem key={link.name} icon={link.icon} path={link.path}>
                    {link.name}
                </NavItem>
            ))}
        </Box>
    );
}

export default Sidebar;
