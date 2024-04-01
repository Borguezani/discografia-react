import { BrowserRouter, Route, Routes } from "react-router-dom"

import { AlbumsList } from "../pages/AlbumsList"
import { CreateAlbum } from "../components/CreateAlbum"
import { NavBar } from "../components/NavBar"
import { Album } from "../pages/Album"
import { CreateTrack } from "../components/CreateTrack"


export function AppRoutes(){
    return(
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route exact path="/" element={<AlbumsList/>}/>
            <Route exact path="/CreateAlbum" element={<CreateAlbum/>}/>
            <Route exact path="/Album/:id/:AlbumTitle" element={<Album/>}/>
            <Route exact path="/CreateTrack/:id" element={<CreateTrack/>}/>
        </Routes>
    </BrowserRouter>
    )
}