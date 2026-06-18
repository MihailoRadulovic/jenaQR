import { useEffect, useState } from "react";
import Background from "./components/Background";
import Menu from "./components/Menu";
import SplashScreen from "./components/SplashScreen";
import jenaLogo from "./images/jenaLogo.jpg";

function App() {
  const [splashDone, setSplashDone] = useState(false);

  useEffect(() => {
    const link = document.querySelector("link[rel~='icon']");
    if (link) {
      link.href = jenaLogo;
    }
  }, []);

  return (
    <div>
      <Background />
      <Menu />
      {!splashDone && <SplashScreen onDone={() => setSplashDone(true)} />}
    </div>
  );
}

export default App;
