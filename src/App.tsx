import React from 'react';
import './App.scss';
import {AppBarContent} from "./components";
import {AppBar, Box} from "@mui/material";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import {Home, Messanger, NotFound, Profile, ChatNotFound} from "./pages";
import {RoutesConst} from "./pages/paths";


function App() {

    return (

        <div className="App">
            <BrowserRouter>
                <AppBar position="fixed">
                    <AppBarContent/>
                </AppBar>
                <Box sx={{display: 'flex', height: '100%', pt: '64px'}}>
                    <Routes>
                        <Route path={RoutesConst.MAIN} element={<Home/>}/>

                        <Route path={RoutesConst.CHAT_WITH_ID}
                               element={<Messanger/>}/>
                        <Route path={RoutesConst.PROFILE} element={<Profile/>}/>
                        <Route path={RoutesConst.NO_CHAT} element={<ChatNotFound/>}/>
                        <Route path='*' element={<NotFound/>}/>

                    </Routes>
                </Box>
            </BrowserRouter>
        </div>

    );
}

export default App;
