import { Flex, Link, Box, Image, VStack, Text, Icon, Center } from "@chakra-ui/react";
import React from "react";
import {
    BiHome,
    BiSliderAlt,
    BiLogOut,
    BiBarChartSquare,
} from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from '../Assets/Images/logo.svg';

const LinkItems = [
    { name: "Accueil", icon: BiHome, path: "/" },
    { name: "Rapport", icon: BiBarChartSquare, path: "/rapport" },
    { name: "Paramètres", icon: BiSliderAlt, path: "/settings" },
    { name: "Se déconnecter", icon: BiLogOut, path: "logout" },
];

const NavItem = ({ name, icon, path, children, ...props }) => {
    return (
        <NavLink
            to={path}
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
                    bg: "#F45B69",
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
                        color="#F45B69"
                    />
                )}
                {children}
            </Flex>
        </NavLink>
    );
};

function Sidebar() {
    return (
        <Box bg="#FFFFFF" h="100vh" py={4} px={5}>
            <Center mt="1rem" h="6rem">
                <Logo height="70px"/>
            </Center>

            {LinkItems.map((link) => (
                <NavItem key={link.name} icon={link.icon} path={link.path}>
                    {link.name}
                </NavItem>
            ))}
        </Box>
    );
}

export default Sidebar;
