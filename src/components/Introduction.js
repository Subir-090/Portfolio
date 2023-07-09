import "./Introduction.css";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Introduction = () => {
  const el = useRef("");
  const el2 = useRef("");
  useEffect(() => {
    const typed1 = new Typed(el.current, {
      strings: [" I am Subir Gupta."],
      startDelay: 300,
      typeSpeed: 50,
      showCursor: false
    });

    // Destropying
    return () => {
      typed1.destroy();
    };
  }, []);

  useEffect(() => {
    const typed2 = new Typed(el2.current, {
      strings: [" I am a programmer."],
      startDelay: 300,
      typeSpeed: 50,
      showCursor: false
    });

    return () => {
      typed2.destroy();
    };
  }, []);

  return (
    <div className="introduction">
      <div className="left">
        <p>
          &lt;p&gt;<span ref={el}></span>&lt;&#47;p&gt;
        </p>
        <p>
          &lt;p&gt;<span ref={el2}></span>&lt;&#47;p&gt;
        </p>
      </div>
      <div className="right">
        <img
          src="https://shorturl.at/nwQ06"
          alt="profile-img"
          className="profile"
        />
      </div>
    </div>
  );
};

export default Introduction;
