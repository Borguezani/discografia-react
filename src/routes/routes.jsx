import { BrowserRouter, Route, Routes } from "react-router-dom"

import { AlbumsList } from "../pages/AlbumsList"
import { CreateAlbum } from "../components/CreateAlbum"
import { NavBar } from "../components/NavBar"


export function AppRoutes(){
    return(
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route exact path="/" element={<AlbumsList/>}/>
            <Route exact path="/CreateAlbum" element={<CreateAlbum/>}/>
            <Route/>
        </Routes>
    </BrowserRouter>
    )
}