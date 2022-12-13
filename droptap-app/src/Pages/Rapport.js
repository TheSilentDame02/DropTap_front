import Notifications from '../Components/Notifications';
import React, { useState } from "react";
import { Box, Heading, Flex, HStack,Tabs, TabList, Tab, TabPanel, TabPanels, Center, VStack,Text, Stack, Progress } from '@chakra-ui/react';
import BarChart from '../Components/BarChart'
import { UserData } from '../Components/DayData';
import LineChart from '../Components/LineChart';
import { BsDropletHalf } from 'react-icons/bs';
import { extendTheme } from "@chakra-ui/react";
import {FaMoneyBillWave} from 'react-icons/fa'

export default function Rapport(){

    const theme = extendTheme({
    colors:{
        blue: {
            50: "#55C2FF",
        },
    }
});

    
    const [userData,setUserData] = useState({
        labels: UserData.map((data) => data.hour),
        datasets: [{
            label: "Consommation d'eau",
            data: UserData.map((data) => data.hourCons),
            borderRadius: 1999,
            backgroundColor: '#55C2FF',
            barThickness: 10,
            barPercentage: 0.5,
        }]
    });
    
    return(
        <>
        <HStack>
            <Box 
                w='52vw'
                h='100vh'
                
            >
                <Flex flexDirection={'column'}>
                    <Heading as="h1" size="md" fontWeight="600" mb={5} >
                        Water consumption
                    </Heading>
                    <Box
                        boxShadow="xl"
                        p="8"
                        h="100%"
                        borderRadius="20px"
                        bg="white"
                    >
                        <Tabs variant='soft-rounded' colorScheme='blue'>
                            <TabList bgColor={'#F3F3F3'} width='-webkit-fit-content' m='auto' borderRadius={9999}>
                                <Tab>Day</Tab>
                                <Tab>Week</Tab>
                                <Tab>Month</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                <Center mb={2} fontSize='large'>Statistics of the Day: </Center>
                                <BarChart chartData={userData} />
                                </TabPanel>
                                <TabPanel>
                                <Center mb={2} fontSize='large'>Statistics of the Week: </Center>
                                <BarChart chartData={userData} />
                                </TabPanel>
                                <TabPanel>
                                <Center mb={2} fontSize='large'>Statistics of the Month:</Center>
                                <BarChart chartData={userData} />
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                        <Center>
                            <VStack>
                                <HStack>
                                <HStack>
                                    <BsDropletHalf style={{color: "#20a4f4",fontSize: "2em"}}/>
                                    <Text fontWeight='bolder'>80L</Text>
                                </HStack>
                                <Text fontSize={12} fontWeight='bold' pl={'40px'} >70% of </Text>
                                </HStack>
                                <Progress value={70} colorScheme='twitter' width='full' borderRadius={20} />
                                <Text pt={5} fontSize={18} fontWeight='bold' >Estimated water bill: </Text>
                                <HStack>
                                    <FaMoneyBillWave style={{color: "green",fontSize: "2em"}}/>
                                    <Text fontWeight='bolder'>200DH</Text>
                                </HStack>
                            </VStack>
                            
                        </Center>
                    </Box>
                </Flex>
            </Box>
            <Box 
                w='25vw'
                h='100vh' 
                p={5}
            >
                <Heading as="h1" size="md" fontWeight="600" mb={5}>
                    Notifications
                </Heading>
                <Notifications />
            </Box>
        </HStack>
        <Box 
                w='52vw'
                h='100vh'
                pb='5'
                
            >
            <Heading as="h1" size="md" fontWeight="600" mb={5} >
                        Quality tracker
            </Heading>    
            <Box boxShadow="xl"
                        p="8"
                        
                        borderRadius="20px"
                        bg="white">
                <Tabs variant='soft-rounded' colorScheme='blue'>
                            <TabList bgColor={'#F3F3F3'} width='-webkit-fit-content' m='auto' borderRadius={9999}>
                                <Tab>Day</Tab>
                                <Tab>Week</Tab>
                                <Tab>Month</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                <Center mb={2} fontSize='large'>Quality of the Day: </Center>
                                <LineChart />
                                </TabPanel>
                                <TabPanel>
                                <Center mb={2} fontSize='large'>Quality of the Week: </Center>
                                <LineChart />
                                </TabPanel>
                                <TabPanel>
                                <Center mb={2} fontSize='large'>Quality of the Month:</Center>
                                <LineChart />
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
            </Box>
        </Box>
        </>
        
    );
} 
