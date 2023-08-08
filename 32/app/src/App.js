import Header from "./ui/containers/Header";
import Footer from "./ui/containers/Footer";
import Main from "./ui/pages/Main";
import About from "./ui/pages/About";
import Contacts from "./ui/pages/Contacts";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <main>
        <Routes>
          <Route path="" element={<Main />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="" element={<Contacts />}></Route>
        </Routes>
      </main>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
