import { Routes, Route } from "react-router-dom";
import HomeV1 from "../pages/homeV1";
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeV1 />} exact />
    </Routes>
  );
}

export default App;
