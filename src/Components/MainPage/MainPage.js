import React from 'react'
import Banner from '../Banner/Banner'
import RowPost from '../RowPost/RowPost'
import Footer from '../Footer_page/Footer'
import {originals, action, trending, ComedyMovies, HorrorMoviess, ActionMovies, RomanceMovies, Documentaries} from "../../urls"
function MainPage() {
  return (
    <div>
      <Banner />
      <RowPost url={originals} title="Netflix originals"/>
      <RowPost url={action} title="Action" isSmall />
      <RowPost url={trending} title="Trending" isSmall />
      <RowPost url={HorrorMoviess} title="HorrorMovies" isSmall />
      <RowPost url={ActionMovies} title="ActionMovies" isSmall />
      <RowPost url={ComedyMovies} title="ComedyMovies" isSmall />
      <RowPost url={RomanceMovies} title="RomanceMovies" isSmall />
      
      <Footer/>
    </div>
  )
}

export default MainPage
