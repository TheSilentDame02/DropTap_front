import React from "react";
import { RiTimer2Fill } from "react-icons/ri";
import { HStack, VStack, Text, Heading } from "@chakra-ui/react";


function Clock() {
    const date = new Date();
    const weekday = date.toLocaleString("en-EN", {
        weekday: "long",
    });
    const daydate = date.toLocaleString("en-EN", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
    const time = Intl.DateTimeFormat("en-EN", {
        timeStyle: "short",
        hourCycle: "h24",
    }).format(Date.now());

    return (
        <div width="100px">
            <HStack>
                <Heading fontWeight="500" color="#4062BB">{time}</Heading>
                <VStack align="left" spacing="0px">
                    <Text fontSize="sm" color="#818181">{weekday}</Text>
                    <Text fontSize="sm" color="#818181">{daydate}</Text>
                </VStack>
            </HStack>
        </div>
    );
}

export default Clock;
