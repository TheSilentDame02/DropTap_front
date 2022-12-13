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
import Login from "./Pages/Login/Login";
import Rapport from "./Pages/Rapport";
import Settings from "./Pages/Parametres";

function App() {
    const success = true;
    if(success==true){
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
                                <Route path="/rapport" element={<Rapport />} />
                                <Route path="/settings" element={<Settings />}
                            </Routes>
                        </VStack>
                    </HStack>
                </Box>
            </div>
        );
    }
    else{
        return (
            <Login />
        );
    }
}

export default App;
