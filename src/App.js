import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Addactivity from "./screens/addActivity/Addactivity";
import Dashboard from "./screens/dasboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Dashboard />} />
          <Route path="/detail/:id" element={<Addactivity />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
