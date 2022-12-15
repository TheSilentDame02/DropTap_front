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
import Notifications from "../Components/Notifications";
import React,{ useState, useEffect } from "react";
import {    CircularProgressbarWithChildren} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import QualityGood from "../Assets/Images/quality-good.jpg";
import QualityBad from "../Assets/Images/quality-bad.jpg";
import QualityMedium from "../Assets/Images/quality-medium.jpg";
import BarChart from "../Components/BarChart";
import { UserData } from '../Components/DayData';
import { userData } from "./Rapport";
import Api from "../services/api";


let dataRobinet ={};

Api.getRobinets().then(response => {
    response.data.forEach(data => {;
        dataRobinet = data;

    });
});

let dataConsommation=0;
let dataConsommationJour=0;
let dataStatistique;

Api.getConsommations().then(response => {
    let dateAuj = ((new Date()).toString().split(' '))[2];
    dataStatistique = response.data;
    response.data.forEach(data => {
        dataConsommation += data.quantite;
        let jourConsommation = (((data.createdAt.toString().split('T'))[0]).split('-'))[2];
        if (dateAuj == jourConsommation){
            dataConsommationJour += data.quantite;
        }
    });
});

let dataSeuil;
Api.getSeuilByType("jour").then(response => {
    dataSeuil = response.data.valeur
});



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



    
    let last_qualite = "";
    useEffect(() => {
        let qualites = [];

        Api.sortQualite(0,1,"createdAt","desc").then((response)=>{
        qualites = response.data.content;
        console.log(qualites[0]);
        qualites[0].qualite = 29;
        if(qualites[0].qualite<10){
            setQualite("good");
        }else if(qualites[0].qualite>=10 && qualites[0].qualite<30){
            setQualite("medium");
        }else{
            setQualite("bad");
        }
    });
    }, []);






    const [consoJour, setConsoJour] = useState(0);
    const [consoMois, setConsoMois] = useState(0);
    const [seuilMois, setSeuilMois] = useState(0);
    const [seuilJour, setSeuilJour] = useState(0);
    const [robinet, setRobinet] = useState(false);
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

    useEffect(() => {
        setTimeout(() => {
            setRobinet(dataRobinet.etat);
            setSeuilJour(dataSeuil);
            setSeuilMois(dataSeuil * 30);
            setConsoJour(dataConsommationJour);
            setConsoMois(dataConsommation);
            let statistiqueConsommation =[
                ['00', 0], ['01', 0], ['02', 0], ['03', 0], ['04', 0], ['05', 0],
                ['06', 0], ['07', 0], ['08', 0], ['09', 0], ['10', 0], ['11', 0],
                ['12', 0], ['13', 0], ['14', 0], ['15', 0], ['16', 0], ['17', 0],
                ['18', 0], ['19', 0], ['20', 0], ['21', 0], ['22', 0], ['23', 0]];
            let jourStatistique = ((new Date()).toString().split(' '))[2];


            dataStatistique.forEach(data => {
                let jourConsommation = (((data.createdAt.toString().split('T'))[0]).split('-'))[2];
                if (jourConsommation==jourStatistique){
                    for (let i=0; i<24; i++){
                        if ((statistiqueConsommation[i][0])==(((data.createdAt.toString().split('T'))[1]).split(':'))[0]){
                            statistiqueConsommation[i][1] += data.quantite;
                        }
                    }
                }

            });






            setUserData({
                labels: statistiqueConsommation.map((data)=>data[0]),
                datasets: [{
                    label: "Consommation d'eau",
                    data: statistiqueConsommation.map((data)=>data[1]),
                    borderRadius: 1999,
                    backgroundColor: '#55C2FF',
                    barThickness: 10,
                    barPercentage: 0.5,

                }]
            });
        }, 1000);
    }, []);

    const [detection, setDetection] = useState(false);
    const [qualite, setQualite] = useState("good");

    const toggleRobinet = () => {
        setRobinet((current) => !current);
        dataRobinet.etat = (!dataRobinet.etat);
        Api.updateEtatRobinet(dataRobinet.id,dataRobinet);
    };

    const toggleDetection = () => {
        if (robinet){
            setDetection((current) => !current);
        }
        if (!detection && robinet){
            let heureDetection = ((new Date()).toString().split(' '))[4];
            let jourDetection = ((new Date()).toString().split(' '))[2];
            setTimeout(() => {

                Api.getConsommations().then(response => {

                    response.data.forEach(data => {
                        let heureConsommation = (data.createdAt.toString().split('T'))[1];
                        let jourConsommation = (((data.createdAt.toString().split('T'))[0]).split('-'))[2];


                        if ((heureDetection <= heureConsommation) && (data.quantite!=0) && (jourConsommation==jourDetection)){
                            toggleRobinet();
                        }
                    });
                });
            }, 8000);

        }

        setTimeout(() => {
            setDetection(false);
        },10000)



    };



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
