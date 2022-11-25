import { Box, HStack } from "@chakra-ui/react";
import Header from "./Components/Header";
import Notifications from "./Components/Notifications";
import Sidebar from "./Components/Sidebar";
import Accueil from "./Components/Accueil";
import "./Assets/Styles/App.css";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <HStack spacing="7" mr="5">
                <Sidebar />
                <Box h="100vh" w="100%">
                    <Header />
                    <Box>
                        {/* main area */}
                        <Routes>
                            <Route path="/" element={<Accueil />} />
                            <Route path="/home" element={<Accueil />} />
                        </Routes>
                    </Box>
                </Box>
                <Notifications />
            </HStack>
        </div>
    );
}

export default App;
