import './App.css';
import Card from './components/Card/Card';
import Data from './data';
import { useState } from 'react';

function App() {
  const [active, setActive] = useState("FirstCard");
  return (
    <div className="App">
      <div>
        {active === "FirstCard" && <Card data={Data} cardIndex={0} />}
        {active === "SecondCard" && <Card data={Data} cardIndex={1} />}
        {active === "ThirdCard" && <Card data={Data} cardIndex={2} />}
      </div>
      <div>
        <span class="dot" onClick={() => setActive("FirstCard")}></span>
        <span class="dot" onClick={() => setActive("SecondCard")}></span>
        <span class="dot" onClick={() => setActive("ThirdCard")}></span>
      </div>
    </div>
  );
}

export default App;
