import { Route, Routes } from "react-router-dom";
import Landing from './views/Landing'
import Home from './views/Home'
import About from './views/About'
import Detail from "./views/Detail";
import Favorites from "./views/Favorites";
function App() {
  return (
      <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path="home/detail/:id" element={<Detail />} />
        <Route path="favorites/detail/:id" element={<Detail />} />
        <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </>
  );
}

export default App;
