import { Flex,Box, Icon, Center } from "@chakra-ui/react";
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
    { name: "Dashboard", icon: BiHome, path: "/" },
    { name: "Statistics", icon: BiBarChartSquare, path: "/rapport" },
    { name: "Settings", icon: BiSliderAlt, path: "/settings" },
    { name: "Logout", icon: BiLogOut, path: "/logout" },
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
        <Box className="sidebar" w="15vw" h="95%" bg="#FFFFFF" py={4} px={2} position='fixed' borderLeftRadius="2rem">
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
