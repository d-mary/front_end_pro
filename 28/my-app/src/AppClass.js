import React from "react";

import { Header } from "./ui/containers/Header";
import { Main } from "./ui/containers/Main";
import { Footer } from "./ui/containers/Footer";
class AppClass extends React.Component {
  render() {
    return (
      <div className="container">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    );
  }
}

export default AppClass;
