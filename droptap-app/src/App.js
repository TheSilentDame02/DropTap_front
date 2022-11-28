import {
    Flex,
    Box,
    HStack,
    Heading,
    Text,
    Grid,
    GridItem,
} from "@chakra-ui/react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Accueil from "./Pages/Accueil";
import "./Assets/Styles/App.css";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Box className="app-glass" pb={5}>
                <Grid
                    mr="5"
                    h="100%"
                    templateColumns={"15rem 1fr 1fr 1fr 1fr 1fr 20rem"}
                    templateRows={"7rem 1rem 1fr 1fr 1rem 1fr 5rem"}
                    gap={4}
                >
                    <GridItem colSpan={1} rowSpan={7}>
                        <Sidebar />
                    </GridItem>
                    <GridItem colSpan={6} rowSpan={1}>
                        <Header/>
                    </GridItem>
                    <Routes>
                        <Route path="/" element={<Accueil/>}/>
                    </Routes>
                </Grid>
            </Box>
        </div>
    );
}

export default App;
