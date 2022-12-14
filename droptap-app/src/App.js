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
import Logout from "./Pages/Logout";
import {render} from "react-dom";

function App() {

    const user = JSON.parse(localStorage.getItem('user'));
    const token = JSON.parse(localStorage.getItem('token'));

    if (user && token[`jwt-token`] ){
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
                                    <Route path="/rapport" element={<Rapport />} />
                                    <Route path="/settings" element={<Settings />} />
                                    <Route path="/logout" element={<Logout />} />
                                </Routes>
                            </VStack>
                        </HStack>

                </Box>

            </div>);
    }else {
        return (
            <div className="App">
                <Login />
            </div>
        )
    }


}

export default App;
