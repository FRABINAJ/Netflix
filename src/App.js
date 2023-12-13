// App.js

import './App.css';
import Navigation from './Navigation/Navigation';
import Routing from './Routing/Routing';

function App() {
  const appStyle = {
    backgroundColor: 'black',
    // Add other styles as needed
  };

  return (
    <div className="App" style={appStyle}>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
      <Navigation />
      <Routing />
    </div>
  );
}

export default App;
