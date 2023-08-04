import React, { useState, useEffect } from "react";
import "./App.css";
import { serverApi } from "./utils/config";
import Header from "./components/Header";

function App() {
  const [userData, setUserData] = useState();
  const [serverErr, setServerErr] = useState();
  const [isRefresh, setIsRefresh] = useState(false);

  const handleFetchData = () => {
    fetch(`${serverApi}/users`)
      .then((res) => res.json())
      .then((res) => setUserData(res))
      .catch((err) => setServerErr(err));
  };

  useEffect(() => {
    handleFetchData();
  }, []);
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
