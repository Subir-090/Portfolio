import "./Work.css";

const Work = () => {
  return (
    <div className="work">
      <section className="skills">
        <h2>Skills</h2>
        <div className="list">
          <ul className="sub-lists">
            <li className="skill">C++</li>
            <li className="skill">Javascript</li>
            <li className="skill">React Js</li>
          </ul>
          <ul className="sub-lists">
            <li className="skill">Node Js</li>
            <li className="skill">HTML</li>
          </ul>
          <ul className="sub-lists">
            <li className="skill">CSS</li>
            <li className="skill">jQuery</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Work;
