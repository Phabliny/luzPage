import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import PoliticaDePrivacidade from "./components/pages/politicaDePrivacidade";
import TermosDeUso from "./components/pages/termosDeUso";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/politicaDePrivacidade" element={<PoliticaDePrivacidade />} />
        <Route path="/termosDeUso" element={<TermosDeUso />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;