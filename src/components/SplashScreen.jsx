import { useEffect, useState } from "react";
import splashImg from "../images/sladoledi/sladoledi-splash.jpg";

const SPLASH_DURATION = 2000; // ms
const FADE_DURATION = 400; // ms
const SESSION_KEY = "jena_splash_seen";

function SplashScreen({ onDone }) {
  const [visible, setVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) {
      onDone();
      return;
    }

    setShouldRender(true);
    const fadeIn = setTimeout(() => setVisible(true), 30);
    const fadeOut = setTimeout(() => setVisible(false), SPLASH_DURATION);

    return () => {
      clearTimeout(fadeIn);
      clearTimeout(fadeOut);
    };
  }, []);

  const handleTransitionEnd = () => {
    if (!visible) {
      sessionStorage.setItem(SESSION_KEY, "1");
      onDone();
    }
  };

  const handleSkip = () => {
    setVisible(false);
  };

  if (!shouldRender) return null;

  return (
    <div
      onClick={handleSkip}
      onTransitionEnd={handleTransitionEnd}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.95)",
        transition: `opacity ${FADE_DURATION}ms ease, transform ${FADE_DURATION}ms ease`,
      }}
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/40 cursor-pointer"
    >
      <img
        src={splashImg}
        alt="Nocciola Gelato sladoledi"
        className="w-[90%] max-w-sm rounded-3xl shadow-2xl object-contain"
      />
    </div>
  );
}

export default SplashScreen;
