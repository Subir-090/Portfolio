import "./Work.css";

const Work = () => {
  return (
    <div className="work">
      <section className="skills">
        <h2>Skills</h2>
        <div className="list">
          <ul className="sub-lists">
            <li className="skill">
              <div className="content">
                <img
                  width="40"
                  height="40"
                  src="https://img.icons8.com/color/40/c-plus-plus-logo.png"
                  alt="c-plus-plus-logo"
                />
                C++
              </div>
            </li>
            <li className="skill">
              <div className="content">
                <img
                  width="38"
                  height="38"
                  src="https://img.icons8.com/color/38/javascript--v1.png"
                  alt="javascript--v1"
                />
                Javascript
              </div>
            </li>
            <li className="skill">
              <div className="content">
                <img
                  width="40"
                  height="40"
                  src="https://img.icons8.com/bubbles/40/react.png"
                  alt="react"
                />
                React Js
              </div>
            </li>
          </ul>
          <ul className="sub-lists">
            <li className="skill">
              <div className="content">
                <img
                  width="39"
                  height="39"
                  src="https://img.icons8.com/fluency/39/node-js.png"
                  alt="node-js"
                />
                Node Js
              </div>
            </li>
            <li className="skill">
              <div className="content">
                <img
                  width="38"
                  height="38"
                  src="https://img.icons8.com/color/38/html-5--v1.png"
                  alt="html-5--v1"
                />
                HTML
              </div>
            </li>
            <li className="skill">
              <div className="content">
                <img
                  width="38"
                  height="38"
                  src="https://img.icons8.com/color/38/mongodb.png"
                  alt="mongodb"
                />
                MongoDB
              </div>
            </li>
          </ul>
          <ul className="sub-lists">
            <li className="skill">
              <div className="content">
                <img
                  width="38"
                  height="38"
                  src="https://img.icons8.com/color/38/css3.png"
                  alt="css3"
                />
                CSS
              </div>
            </li>
            <li className="skill">
              <div className="content">
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/ios-filled/30/jquery.png"
                  alt="jquery"
                />
                jQuery
              </div>
            </li>
            <li className="skill">
              <div className="content">
                <img
                  width="40"
                  height="40"
                  src="https://img.icons8.com/external-bearicons-blue-bearicons/40/external-SQL-file-extension-bearicons-blue-bearicons.png"
                  alt="external-SQL-file-extension-bearicons-blue-bearicons"
                />
                SQL
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Work;
