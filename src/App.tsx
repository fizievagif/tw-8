import React from 'react';
import Home from "./Containers/Home/Home";
import {Route, Routes} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import NewQuote from "./Containers/NewQuote/NewQuote";
import Edit from "./Containers/Edit/Edit";

function App() {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <main className="container">
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
      </main>
    </div>
  );
}

export default App;
