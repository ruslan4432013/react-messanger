import React from 'react';
import './Messanger.scss';
import {AppBarContent} from "../components";
import {AppBar, Box} from "@mui/material";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import {Home, MessangerChat, NotFound, Profile, ChatNotFound} from "./pages";
import {ROUTES} from "../config/paths";


function Messanger() {

    return (

        <div className="App">
            <BrowserRouter>
                <AppBar position="fixed">
                    <AppBarContent/>
                </AppBar>
                <Box sx={{display: 'flex', height: '100%', pt: '64px'}}>
                    <Routes>
                        <Route path={ROUTES.MAIN} element={<Home/>}/>

                        <Route path={ROUTES.CHAT_WITH_ID}
                               element={<MessangerChat/>}/>
                        <Route path={ROUTES.PROFILE} element={<Profile/>}/>
                        <Route path={ROUTES.NO_CHAT} element={<ChatNotFound/>}/>
                        <Route path='*' element={<NotFound/>}/>
                    </Routes>
                </Box>
            </BrowserRouter>
        </div>

    );
}

export default Messanger;
