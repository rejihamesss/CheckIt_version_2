import React, { useState } from "react";
import LogInPage from "./LogInPage";

interface MainPageProps {
  token: string;
}

function MainPage({ token }: MainPageProps) {
  const [tokenOnly, setTokenOnly] = useState<string>(token);

  const handleLogOut = () => {
    setTokenOnly("");
    window.localStorage.removeItem("token");
  };

  return (
    <>
      {tokenOnly ? (
        <div>
          <div>MainPage</div>
          <button onClick={handleLogOut}>Log Out</button>
        </div>
      ) : (
        <LogInPage />
      )}
    </>
  );
}

export default MainPage;
