import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import FormWizard from "./components/form-wizard/FormWizad";
import PersoenlicheAngaben, { Title as PersoenlicheAngabenTitle } from './pages/formular/persoenliche-angaben/PersoenlicheAngaben';
import WeitereAngaben, { Title as WeitereAngabenTitle } from "./pages/formular/weitere-angaben/WeitereAngaben";

import "./App.css";

const FORM = [
  {
    id: 0,
    path: "/persoenliche-angaben",
    title: PersoenlicheAngabenTitle,
    content: <PersoenlicheAngaben />
  },
  {
    id: 1,
    path: "/weitere-angaben",
    title: WeitereAngabenTitle,
    content: <WeitereAngaben />
  }
];

class App extends Component {

  render() {
    return <div className="App">
        <header className="App-header">Learn React</header>
        <main>
          <Router>
            <FormWizard steps={FORM} redirect="/persoenliche-angaben" />
          </Router>
        </main>
      </div>;
  }
}

export default App;
