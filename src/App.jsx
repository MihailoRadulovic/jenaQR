import { useEffect } from "react";
import Background from "./components/Background";
import Menu from "./components/Menu";
import jenaLogo from "./jenaLogo.jpg";

function App() {
  useEffect(() => {
    const link = document.querySelector("link[rel~='icon']");
    if (link) {
      link.href = jenaLogo; // Promeni putanju ako koristiš drugi fajl
    }
  }, []);

  return (
    <div>
      <Background />
      <Menu />
    </div>
  );
}

export default App;
