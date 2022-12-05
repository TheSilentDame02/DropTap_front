import {
    Flex,
    Box,
    VStack,
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
//import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Box className="app-glass">
                <HStack h="100%" align="stretch">
                    <Sidebar />

                    <VStack h="100%" align="start" spacing={2}>
                        <Box h="7rem">
                            <Header />
                        </Box>

                        {/* any page will fit here :) */}
                        <Routes>
                            <Route path="/" element={<Accueil />} />
                        </Routes>
                    </VStack>
                </HStack>
            </Box>
        </div>
    );
}

export default App;
