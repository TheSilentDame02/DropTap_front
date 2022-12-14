import {
    HStack,
    Image,
    Switch,
    VStack,
    GridItem,
    Box,
    Heading,
    Text,
    Grid,
} from "@chakra-ui/react";
import React from "react";
import Notifications from "../Components/Notifications";
import { useState } from "react";
import {    CircularProgressbarWithChildren} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import QualityGood from "../Assets/Images/quality-good.jpg";
import QualityBad from "../Assets/Images/quality-bad.jpg";
import QualityMedium from "../Assets/Images/quality-medium.jpg";
import BarChart from "../Components/BarChart";
import { UserData } from '../Components/DayData';
import { userData } from "./Rapport";
import Api from "../Services/api";

function ProgressBar({ conso, seuil, titre, date }) {
    const strokeColor = conso / seuil > 1 ? `#F45B69` : `#55C2FF`;
    return (
        <>
            <VStack>
                <Text fontSize="lg" h="1rem">
                    {titre}
                </Text>
                <Text fontSize="sm" color="grey">
                    {date}
                </Text>
                <div style={{ width: "150px", height: "150px" }}>
                    <CircularProgressbarWithChildren
                        value={conso}
                        maxValue={seuil}
                        styles={{
                            path: {
                                stroke: `${strokeColor}`,
                            },
                        }}
                    >
                        <div>
                            <Text
                                fontSize="xl"
                                fontWeight="bold"
                            >{`${conso} L`}</Text>
                            / {`${seuil} L`}
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
            </VStack>
        </>
    );
}

function Accueil() {
    const date = new Date();
    const today = date.toLocaleString("fr-FR", {
        weekday: "long",
        day: "numeric",
        month: "long",
    });
    const thisMonth = date.toLocaleString("fr-FR", {
        month: "long",
        year: "numeric",
    });


    const [somme, setSomme]=useState(0);
    Api.getConsommations().then(response => {
        let s=0;
        response.data.forEach(data => s += data.quantite);
        setSomme(s);
        setConsoJour(s);
        setConsoMois(s);
    });

    Api.getSeuilByType("jour").then(response => {
        setSeuilJour(response.data.valeur);
    });

    Api.getSeuilByType("mois").then(response => {
        setSeuilMois(response.data.valeur);
    });









    const [consoJour, setConsoJour] = useState(somme);
    const [consoMois, setConsoMois] = useState(somme);
    const [seuilMois, setSeuilMois] = useState(9000);
    const [seuilJour, setSeuilJour] = useState(Math.floor(seuilMois / 30));
    const [robinet, setRobinet] = useState(true);
    const [detection, setDetection] = useState(true);
    const [qualite, setQualite] = useState("good");

    const toggleRobinet = () => {
        setRobinet((current) => !current);
    };

    const toggleDetection = () => {
        setDetection((current) => !current);
    };

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

    return (
        <>
            <Grid
                mx={4}
                mb={4}
                templateColumns={"1fr 1fr 1fr 1fr 1fr 20rem"}
                templateRows={"1rem 8rem 8rem 1rem 1fr"}
                gap={4}
            >
                <GridItem colSpan={5} rowSpan={1}>
                    <Heading as="h1" size="md" fontWeight="600">
                        Ma consommation
                    </Heading>
                </GridItem>
                <GridItem colSpan={1} rowSpan={1}>
                    <Heading as="h1" size="md" fontWeight="600">
                        Notifications
                    </Heading>
                </GridItem>
                <GridItem colSpan={2} rowSpan={2}>
                    <Box
                        boxShadow="xl"
                        p="8"
                        h="100%"
                        borderRadius="20px"
                        bg="white"
                    >
                        <ProgressBar
                            conso={consoJour}
                            seuil={seuilJour}
                            titre="Aujourd'hui"
                            date={today}
                        />
                    </Box>
                </GridItem>

                <GridItem colSpan={2} rowSpan={2}>
                    <Box
                        boxShadow="xl"
                        p="8"
                        h="100%"
                        borderRadius="20px"
                        bg="white"
                    >
                        <ProgressBar
                            conso={consoMois}
                            seuil={seuilMois}
                            titre="Ce mois"
                            date={thisMonth}
                        />
                    </Box>
                </GridItem>
                <GridItem>
                    <Box
                        boxShadow="xl"
                        p="5"
                        h="100%"
                        borderRadius="20px"
                        bg="white"
                    >
                        <VStack>
                            <Text fontSize="sm">Robinet</Text>
                            <Switch
                                size="lg"
                                isChecked={robinet && "isChecked"}
                                onChange={toggleRobinet}
                            />
                        </VStack>
                    </Box>
                </GridItem>

                <GridItem
                    colSpan={1}
                    rowSpan={2}
                    style={{ overflowY: "scroll" }}
                >
                    <Notifications />
                </GridItem>

                <GridItem>
                    <Box
                        boxShadow="xl"
                        p="5"
                        h="100%"
                        borderRadius="20px"
                        bg="white"
                    >
                        <VStack>
                            <Text fontSize="sm" align="center">
                                Détection des fuites
                            </Text>
                            <Switch
                                size="lg"
                                isChecked={detection && "isChecked"}
                                onChange={toggleDetection}
                            />
                        </VStack>
                    </Box>
                </GridItem>

                <GridItem colSpan={3} rowSpan={1}>
                    <Heading as="h1" size="md" fontWeight="600">
                        Qualité de l'eau
                    </Heading>
                </GridItem>

                <GridItem colSpan={3} rowSpan={1}>
                    <Heading as="h1" size="md" fontWeight="600">
                        Statistiques
                    </Heading>
                </GridItem>

                <GridItem colSpan={3} rowSpan={1}>
                    <Box
                        boxShadow="xl"
                        p="8"
                        h="100%"
                        borderRadius="20px"
                        bg="white"
                    >
                        {qualite === "good" && (
                            <HStack>
                                <Image h="150px" pr={4} src={QualityGood} />
                                <Text>
                                    Vous pouvez boire l'eau du robinet sans
                                    problème.
                                </Text>
                            </HStack>
                        )}
                        {qualite === "bad" && (
                            <HStack>
                                <Image h="150px" pr={4} src={QualityBad} />
                                <Text>
                                    La qualité de l'eau est mauvaise en ce
                                    moment.
                                </Text>
                            </HStack>
                        )}
                        {qualite === "medium" && (
                            <HStack>
                                <Image h="150px" pr={4} src={QualityMedium} />
                                <Text>La qualité de l'eau est moyenne.</Text>
                            </HStack>
                        )}
                    </Box>
                </GridItem>

                <GridItem colSpan={3} rowSpan={1}>
                    <Box
                        boxShadow="xl"
                        p="8"
                        h="100%"
                        borderRadius="20px"
                        bg="white"
                        mb={5}
                    >
                    <Box h='100%' w='30vw'>
                        <BarChart chartData={userData}/>
                    </Box>
                    </Box>
                </GridItem>
            </Grid>
        </>
    );
}

export default Accueil;
