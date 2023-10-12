import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Graph from "./pages/Graph";
import "./App.css";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <header className="App-header">
            <Routes>
              <Route path="/" Component={Graph} />
            </Routes>
          </header>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
