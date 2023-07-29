import { useState } from "react";
import error from "./assets/Error 404.png";

import "./App.css";

function App() {
  return (
    <>
      <center>
        <main className="main">
          <div className="main-img">
            <img src={error} className="bounce" alt="Error 404" />
          </div>
          <div>
            <h2>Cooking Our Website</h2>
            <p>Education and Information management Software</p>
          </div>
        </main>
      </center>
    </>
  );
}

export default App;
