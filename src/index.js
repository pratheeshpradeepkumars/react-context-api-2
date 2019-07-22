import React from "react";
import ReactDOM from "react-dom";

import LoadingProvider from "./providers/Loading.Provider";
import Spinner from "./components/Spinner";
import User from "./components/User";

import "./styles.css";

function App() {
  return (
    <>
      <LoadingProvider>
        <Spinner />
        <User />
      </LoadingProvider>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
