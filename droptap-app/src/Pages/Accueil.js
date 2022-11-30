import {
    HStack,
    Image,
    Switch,
    VStack,
    GridItem,
    Box,
    Heading,
    Text,
} from "@chakra-ui/react";
import React from "react";
import Notifications from "../Components/Notifications";
import { useState } from "react";
import {
    CircularProgressbarWithChildren,
    buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import QualityGood from "../Assets/Images/quality-good.jpg";
import QualityBad from "../Assets/Images/quality-bad.jpg";
import QualityMedium from "../Assets/Images/quality-medium.jpg";


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

    const [consoJour, setConsoJour] = useState(400);
    const [consoMois, setConsoMois] = useState(6750);
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

    return (
        <>
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
                    p="8"
                    h="100%"
                    borderRadius="20px"
                    bg="white"
                >
                    <VStack>
                        <Text>Robinet</Text>
                        <Switch
                            size="lg"
                            isChecked={robinet && "isChecked"}
                            onChange={toggleRobinet}
                        />
                    </VStack>
                </Box>
            </GridItem>

            <GridItem colSpan={1} rowSpan={2}>
                <Notifications />
            </GridItem>

            <GridItem>
                <Box
                    boxShadow="xl"
                    p="8"
                    h="100%"
                    borderRadius="20px"
                    bg="white"
                >
                    <VStack>
                        <Text align="center">Détection des fuites</Text>
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

            <GridItem colSpan={3} rowSpan={2}>
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
                                La qualité de l'eau est mauvaise en ce moment.
                            </Text>
                        </HStack>
                    )}
                    {qualite === "medium" && (
                        <HStack>
                            <Image h="150px" pr={4} src={QualityMedium} />
                            <Text>
                                La qualité de l'eau est moyenne.
                            </Text>
                        </HStack>
                    )}
                </Box>
            </GridItem>

            <GridItem colSpan={3} rowSpan={2}>
                <Box
                    boxShadow="xl"
                    p="8"
                    h="100%"
                    borderRadius="20px"
                    bg="white"
                    mb={5}
                >
                    <Text>box stat</Text>
                </Box>
            </GridItem>
        </>
    );
}

export default Accueil;
