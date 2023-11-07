import { useState } from 'react';
import './App.css';
import {originals, action, trending} from "./urls"
import Banner from './Components/Banner/Banner.js';
import NavBar from './Components/NavBar/NavBar.js';
import RowPost from './Components/RowPost/RowPost.js';
// import axios from "axios"

function App() {
  const [state, setState] = useState([])
  return (
    < div className="App" >
      <NavBar />
      <Banner />
      <RowPost url={originals} title="Netflix originals"/>
      <RowPost url={action} title="Action" isSmall />
      <RowPost url={trending} title="Trending" isSmall />









      {/* <button onClick={() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
          console.log(response.data)
          setState(response.data)
        })
      }}>Click me</button>
      {
        state.map((obj, index) => {
          return (
            <div>
              <h1>{index + 1}</h1>
              <h1>{obj.title}</h1>
              <h4>{obj.body}</h4>
            </div>
          )
        }) 
      }*/}
    </div >
  );
}

export default App;
