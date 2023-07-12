import { memo, useCallback } from "react";
import "./Resume.css";

const Resume = memo(() => {
  const handleMouseDown = useCallback((e) => {
    if (e.button == 2) {
      return false;
    }
  }, []);

  return (
    <div className="resume loading">
      <img src="/assets/CV.jpg" alt="cv-img" onMouseDown={handleMouseDown} loading="lazy"/>
    </div>
  );
});

export default Resume;
