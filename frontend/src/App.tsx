import React, { useEffect, useState } from "react";
import LogInPage from "./components/LogInPage";
import MainPage from "./components/MainPage";

function App() {
  const [tokenOnly, setTokenOnly] = useState<string>("");

  useEffect(() => {
    const hash = window.location.hash;
    let tokenOnly = window.localStorage.getItem("token");

    if (!tokenOnly && hash) {
      tokenOnly =
        hash
          .substring(1)
          .split("&")
          .find((elem) => elem.startsWith("access_token"))
          ?.split("=")[1] || null;

      window.location.hash = "";

      if (tokenOnly) {
        window.localStorage.setItem("token", tokenOnly);
      }
    }

    if (tokenOnly) {
      setTokenOnly(tokenOnly);
    }

    //console.log(tokenOnly);
  }, []);

  // useEffect(() => {
  //   async function getToken() {
  //     const response = await fetch("/auth/token");
  //     const json = await response.json();
  //     setToken(json.access_token);
  //   }
  //   getToken();
  // }, []);

  return (
    <>{tokenOnly === "" ? <LogInPage /> : <MainPage token={tokenOnly} />}</>
  );
}

export default App;
