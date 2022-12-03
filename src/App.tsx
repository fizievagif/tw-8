import React from 'react';
import Home from "./Containers/Home/Home";
import {Route, Routes} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import NewQuote from "./Containers/NewQuote/NewQuote";
import Edit from "./Containers/Edit/Edit";
import LeftSide from "./Components/LeftSide/LeftSide";

function App() {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <div className="container">
        <main className="row">
          <div className="col col-2 mt-5">
            <LeftSide/>
          </div>
          <div className="col col-10">
            <Routes>
              <Route path="/" element={(
                <Home/>
              )}/>
              <Route path="/edit/:id" element={(
                <Edit/>
              )}/>
              <Route path="/submit" element={(
                <NewQuote/>
              )}/>
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
