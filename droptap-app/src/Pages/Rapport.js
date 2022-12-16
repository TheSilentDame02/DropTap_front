import Notifications from '../Components/Notifications';
import React, {useEffect, useState} from "react";
import { Box, Heading, Flex, HStack,Tabs, TabList, Tab, TabPanel, TabPanels, Center, VStack,Text, Stack, Progress } from '@chakra-ui/react';
import BarChart from '../Components/BarChart'
import { UserData } from '../Components/DayData';
import LineChart from '../Components/LineChart';
import { BsDropletHalf } from 'react-icons/bs';
import { extendTheme } from "@chakra-ui/react";
import {FaMoneyBillWave} from 'react-icons/fa'
import Api from "../services/api";


let dataStatistique;

Api.getConsommations().then(response => {
    dataStatistique = response.data;
});

let dataSeuil;
Api.getSeuilByType("jour").then(response => {
    dataSeuil = response.data.valeur
});


export default function Rapport(){

    const theme = extendTheme({
    colors:{
        blue: {
            50: "#55C2FF",
        },
    }
});

    const [prixConsommationDay, setPrixConsommationDay] = useState(0);
    const [prixConsommationMonth, setPrixConsommationMonth] = useState(0);
    const [prixConsommationYear, setPrixConsommationYear] = useState(0);
    const [seuilJour, setSeuilJour] = useState(0);


    const [userDataDay,setUserDataDay] = useState({
        labels: UserData.map((data) => data.hour),
        datasets: [{
            label: "Water usage",
            data: UserData.map((data) => data.hourCons),
            borderRadius: 1999,
            backgroundColor: '#55C2FF',
            barThickness: 10,
            barPercentage: 0.5,
        }]
    });

    const [userDataMonth,setUserDataMonth] = useState({
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

    const [userDataYear,setUserDataYear] = useState({
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

    useEffect(() => {
        setTimeout(() => {
            setSeuilJour(dataSeuil);

            let statistiqueConsommationDay =[
                ['00', 0], ['01', 0], ['02', 0], ['03', 0], ['04', 0], ['05', 0],
                ['06', 0], ['07', 0], ['08', 0], ['09', 0], ['10', 0], ['11', 0],
                ['12', 0], ['13', 0], ['14', 0], ['15', 0], ['16', 0], ['17', 0],
                ['18', 0], ['19', 0], ['20', 0], ['21', 0], ['22', 0], ['23', 0]];


            let statistiqueConsommationMonth =[
                ['01', 0], ['02', 0], ['03', 0], ['04', 0], ['05', 0],
                ['06', 0], ['07', 0], ['08', 0], ['09', 0], ['10', 0], ['11', 0],
                ['12', 0], ['13', 0], ['14', 0], ['15', 0], ['16', 0], ['17', 0],
                ['18', 0], ['19', 0], ['20', 0], ['21', 0], ['22', 0], ['23', 0],
                ['24', 0], ['25', 0], ['26', 0], ['27', 0], ['28', 0], ['29', 0],
                ['30', 0],['31', 0]]



            let statistiqueConsommationYear=[
                ['01', 0], ['02', 0], ['03', 0], ['04', 0],
                ['05', 0], ['06', 0], ['07', 0], ['08', 0],
                ['09', 0], ['10', 0], ['11', 0], ['12', 0],
            ]

            let statistiquePrixDay = 0;

            let statistiquePrixMonth = 0;

            let statistiquePrixYear = 0;

            let jourStatistique = ((new Date()).toString().split(' '))[2];

            dataStatistique.forEach(data => {
                let jourConsommation = (((data.createdAt.toString().split('T'))[0]).split('-'));

                if (jourConsommation[2]==jourStatistique){
                    for (let i=0; i<24; i++){
                        if ((statistiqueConsommationDay[i][0])==(((data.createdAt.toString().split('T'))[1]).split(':'))[0]){
                            statistiqueConsommationDay[i][1] += data.debit;
                        }
                    }
                }

                for (let j=0; j<31; j++){
                    if (jourConsommation[2] == statistiqueConsommationMonth[j][0]){
                        statistiqueConsommationMonth[j][1] += data.debit;
                    }
                }



                for (let j=0; j<12; j++){
                    if (jourConsommation[1] == statistiqueConsommationYear[j][0]){
                        statistiqueConsommationYear[j][1] += data.debit;
                    }
                }

            });

            for (let j=0; j<24; j++){
                statistiquePrixDay += statistiqueConsommationDay[j][1];
            }

            for (let j=0;j<31;j++){
                statistiquePrixMonth += statistiqueConsommationMonth[j][1];
            }

            for (let j=0; j<12; j++){
                statistiquePrixYear += statistiqueConsommationYear[j][1];
            }


            setPrixConsommationDay(statistiquePrixDay);
            setPrixConsommationMonth(statistiquePrixMonth);
            setPrixConsommationYear(statistiquePrixYear);

            setUserDataDay({
                labels: statistiqueConsommationDay.map((data)=>data[0]),
                datasets: [{
                    label: "Consommation d'eau",
                    data: statistiqueConsommationDay.map((data)=>data[1]),
                    borderRadius: 1999,
                    backgroundColor: '#55C2FF',
                    barThickness: 10,
                    barPercentage: 0.5,

                }]
            });

            setUserDataMonth({
                labels: statistiqueConsommationMonth.map((data)=>data[0]),
                datasets: [{
                    label: "Consommation d'eau",
                    data: statistiqueConsommationMonth.map((data)=>data[1]),
                    borderRadius: 1999,
                    backgroundColor: '#55C2FF',
                    barThickness: 10,
                    barPercentage: 0.5,

                }]
            });

            setUserDataYear({
                labels: statistiqueConsommationYear.map((data)=>data[0]),
                datasets: [{
                    label: "Consommation d'eau",
                    data: statistiqueConsommationYear.map((data)=>data[1]),
                    borderRadius: 1999,
                    backgroundColor: '#55C2FF',
                    barThickness: 10,
                    barPercentage: 0.5,

                }]
            });
        }, 1000);
    }, []);
    
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
                                <Tab>Month</Tab>
                                <Tab>Year</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                <Center mb={2} fontSize='large'>Statistics of the Day: </Center>
                                <BarChart chartData={userDataDay} />
                                    <Center>
                                        <VStack>
                                            <HStack>
                                                <HStack>
                                                    <BsDropletHalf style={{color: "#20a4f4",fontSize: "2em"}}/>
                                                    <Text fontWeight='bolder'>{seuilJour }L</Text>
                                                </HStack>
                                                <Text fontSize={12} fontWeight='bold' pl={'40px'} >{(prixConsommationDay / (seuilJour ) ).toFixed(2)}% of </Text>
                                            </HStack>
                                            <Progress value={(prixConsommationDay / (seuilJour ) ).toFixed(2)} colorScheme='twitter' width='full' borderRadius={20} />
                                            <Text pt={5} fontSize={18} fontWeight='bold' >Estimated water bill: </Text>
                                            <HStack>
                                                <FaMoneyBillWave style={{color: "green",fontSize: "2em"}}/>
                                                <Text fontWeight='bolder'>{prixConsommationDay/250}</Text>
                                            </HStack>
                                        </VStack>

                                    </Center>
                                </TabPanel>
                                <TabPanel>
                                <Center mb={2} fontSize='large'>Statistics of the Month: </Center>
                                <BarChart chartData={userDataMonth} />
                                    <Center>
                                        <VStack>
                                            <HStack>
                                                <HStack>
                                                    <BsDropletHalf style={{color: "#20a4f4",fontSize: "2em"}}/>
                                                    <Text fontWeight='bolder'>{seuilJour * 31}L</Text>
                                                </HStack>
                                                <Text fontSize={12} fontWeight='bold' pl={'40px'} >{(prixConsommationMonth / (seuilJour * 31)).toFixed(2) }% of </Text>
                                            </HStack>
                                            <Progress value={(prixConsommationMonth / (seuilJour * 31)).toFixed(2) } colorScheme='twitter' width='full' borderRadius={20} />
                                            <Text pt={5} fontSize={18} fontWeight='bold' >Estimated water bill: </Text>
                                            <HStack>
                                                <FaMoneyBillWave style={{color: "green",fontSize: "2em"}}/>
                                                <Text fontWeight='bolder'>{prixConsommationMonth/250}</Text>
                                            </HStack>
                                        </VStack>

                                    </Center>
                                </TabPanel>
                                <TabPanel>
                                <Center mb={2} fontSize='large'>Statistics of the Year:</Center>
                                <BarChart chartData={userDataYear} />
                                    <Center>
                                        <VStack>
                                            <HStack>
                                                <HStack>
                                                    <BsDropletHalf style={{color: "#20a4f4",fontSize: "2em"}}/>
                                                    <Text fontWeight='bolder'>{seuilJour * 31 * 12}L</Text>
                                                </HStack>
                                                <Text fontSize={12} fontWeight='bold' pl={'40px'} > {(prixConsommationYear / (seuilJour * 31 * 12)).toFixed(2)  }% of </Text>
                                            </HStack>
                                            <Progress value={(prixConsommationYear / (seuilJour * 31 * 12)).toFixed(2)  } colorScheme='twitter' width='full' borderRadius={20} />
                                            <Text pt={5} fontSize={18} fontWeight='bold' >Estimated water bill: </Text>
                                            <HStack>
                                                <FaMoneyBillWave style={{color: "green",fontSize: "2em"}}/>
                                                <Text fontWeight='bolder'>{prixConsommationYear/250}</Text>
                                            </HStack>
                                        </VStack>

                                    </Center>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>

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
