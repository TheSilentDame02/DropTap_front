import {
    Box,
    VStack,
    HStack,
} from "@chakra-ui/react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Accueil from "./Pages/Accueil";
import "./Assets/Styles/App.css";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Box className="app-glass">
                <HStack h="100%" align="stretch">
                    <Sidebar />

                    <VStack pl="16vw" h="100%" align="start">
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
