import React from "react";
import { Provider } from "react-redux";
import store from "./common/store/store";
import AppRouter from "./common/utility/Router";
import "./App.scss";

function App() {
  return (
    <div className="app-container">
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
}

export default App;
