import React from 'react'
import MainPage from '../Components/MainPage/MainPage'
import FirstPage from '../Components/First Page/FirstPage'
import { Route, Routes} from 'react-router-dom'
import ActionMovies from '../Components/ActionMovies/ActionMovies'
import HorrorMovies from '../Components/HorrorMovies/HorrorMovies'
import ComedyMovie from '../Components/Comedy Movie/ComedyMovie'
import RomanceMovie from '../Components/Romace Movie/RomanceMovie'
import Documentary from '../Components/Documentary/Documentary'
import NetflixClone from '../Components/NetflixClone/NetflixClone'
import Signin from '../Components/Signin/Signin'
import Stage1 from '../Components/First Page/Stage1'
import Stage1A from '../Components/First Page/Stage1A'
import Stage2 from '../Components/First Page/Stage2'
import Stage3 from '../Components/First Page/Stage3'
import Stage4 from '../Components/First Page/Stage4'
import Stage4A from '../Components/First Page/Stage4A'
import Stage4B from '../Components/First Page/Stage4B'

function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="MainPage" element={<MainPage/>}/>
        <Route path="FirstPage" element={<FirstPage/>}/>
        <Route path="ActionMovies" element={<ActionMovies/>}/>
        <Route path="HorrorMovies" element={<HorrorMovies/>}/>
        <Route path="ComedyMovie" element={<ComedyMovie/>}/>
        <Route path="RomanceMovie" element={<RomanceMovie/>}/>
        <Route path="Documentaries" element={<Documentary/>}/>
        <Route path="NetflixClone" element={<NetflixClone/>}/>
        <Route path="Signin" element={<Signin/>}/>
        <Route path="Stage1" element={<Stage1/>}/>
        <Route path="Stage1A" element={<Stage1A/>}/>
        <Route path="Stage2" element={<Stage2/>}/>
        <Route path="Stage3" element={<Stage3/>}/>
        <Route path="Stage4" element={<Stage4/>}/>
        <Route path="Stage4A" element={<Stage4A/>}/>
        <Route path="Stage4B" element={<Stage4B/>}/>

      </Routes>
    </div>
  )
}

export default Routing
