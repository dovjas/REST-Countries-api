import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Countries from "./components/Countries";
import SingleCountry from "./components/SingleCountry";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/:name" element={<SingleCountry />} /> 
        </Routes>      
      </BrowserRouter>

    </div>
  );
}

export default App;
