import "./App.css";
import Navbar from "./component/Navbar";
import Textform from "./component/Textform";
import Counter from "./component/Counter";
import Alert from "./component/Alert";
import About from "./component/About";
import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //darkmode
  const [alert, setalert] = useState(null); //alert

  //alert
  const showalert = (type, msg) => {
    setalert({
      type: type,
      msg: msg,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  //darkmode
  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showalert("success", "dark mode has been enable");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showalert("success", "light mode has been enable");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="APPS"
          about="About"
          mode={mode}
          togglemode={togglemode}
        />
        <Alert alert={alert} />

        <div className="container my-3">
          <Switch>
            <Route path="/textutils">
              {/* <Users /> */}
              <Textform
                heading="enter a text"
                mode={mode}
                showalert={showalert}
              />
            </Route>
            <Route path="/counter">
              {/* <Home /> */}
              <Counter
                head="Welcome to counter App"
                mode={mode}
              />
            </Route>
            <Route path="/about">
              <About mode={mode} />
            </Route>
            <Route path="/">
            <Textform
                heading="enter a text"
                mode={mode}
                showalert={showalert}
              />
            </Route>
          </Switch>
          {/* <About/> */}
        </div>
      </Router>
    </>
  );
}

export default App;
