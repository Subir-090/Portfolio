import "./Introduction.css";
import Typed from "typed.js";
import { memo, useEffect, useRef } from "react";

const Introduction = memo(() => {
  const el = useRef("");

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Subir Gupta.","a programmer."],
      startDelay: 300,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      smartBackspace: true,
      loop: true,
      showCursor: false
    });

    return () => {
      typed.destroy();
    };
  }, []);

  
  return (
    <div className="introduction md-reverse">
      <div className="left">
        <div className="intro-content md">
          <p>I&apos;m</p>
          <p className="special">&nbsp;<span ref={el}></span></p>
        </div>
      </div>
      <div className="right">
        <img
          src="https://shorturl.at/nwQ06"
          alt="profile-img"
          className="profile loading"
        />
      </div>
    </div>
  );
});

export default Introduction;
