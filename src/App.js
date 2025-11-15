import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import "./Components/Header/header"
import Header from "./Components/Header/header";
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import Home from '../src/pages/Home/index';
import About from '../src/pages/About/index'


function App() {
  return (
   <BrowserRouter>
      <Header />
      <Routes>
        <Route exact={true} path='/' element={<Home/>}/>
        <Route exact={true} path='/about' element={<About/>}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
