import React from 'react'
import MainPage from '../Components/MainPage/MainPage'
import FirstPage from '../Components/First Page/FirstPage'
import { Route, Routes} from 'react-router-dom'
import Home from '../Navigation/Navigation'
import ActionMovies from '../Components/ActionMovies/ActionMovies'
import HorrorMovies from '../Components/HorrorMovies/HorrorMovies'
import { ComedyMovies, Documentaries } from '../urls'
import ComedyMovie from '../Components/Comedy Movie/ComedyMovie'
import RomanceMovie from '../Components/Romace Movie/RomanceMovie'
import Documentary from '../Components/Documentary/Documentary'

function Routing() {
  return (
    <div>
      <Routes>
        <Route path="home" element={<Home/>}/>
        <Route path="MainPage" element={<MainPage/>}/>
        <Route path="FirstPage" element={<FirstPage/>}/>
        <Route path="ActionMovies" element={<ActionMovies/>}/>
        <Route path="HorrorMovies" element={<HorrorMovies/>}/>
        <Route path="ComedyMovie" element={<ComedyMovie/>}/>
        <Route path="RomanceMovie" element={<RomanceMovie/>}/>
        <Route path="Documentaries" element={<Documentary/>}/>
        
      </Routes>
    </div>
  )
}

export default Routing
