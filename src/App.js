import './App.css';
import Banner from './Components/Banner/Banner.js';
import NavBar from './Components/NavBar/NavBar.js';
import RowPost from './Components/RowPost/RowPost.js';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost/>
    </div>
  );
}

export default App;
