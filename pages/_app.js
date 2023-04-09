import { useState } from "react";
import AppContext from "../components/AppContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [nameContext, setNameContext] = useState("John");

  return (
    <AppContext.Provider value={{ nameContext, setNameContext }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
