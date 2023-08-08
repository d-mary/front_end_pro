import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./ui/containers/Header";
import { Main } from "./ui/pages/Main";
import { About } from "./ui/pages/About";
import { Contacts } from "./ui/pages/Contacts";
import { Footer } from "./ui/containers/Footer";
class AppClass extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header></Header>
          <Main>
            <Routes>
              <Route path="/" element={<Main></Main>}></Route>
              <Route path="/about" element={<About></About>}></Route>
            </Routes>
          </Main>
          <Footer></Footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default AppClass;
