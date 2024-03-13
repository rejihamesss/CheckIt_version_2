import React, { useEffect, useState } from "react";

function LogInPage() {
  return (
    <div className="App">
      <header className="App-header">
        <a className="btn-spotify" href="http://127.0.0.1:5000/auth/login">
          Login with Spotify
        </a>
      </header>
    </div>
  );
}

export default LogInPage;
