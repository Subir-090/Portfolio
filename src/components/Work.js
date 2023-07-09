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
                <div className="img-container">
                  <img
                    width="40"
                    height="40"
                    src="https://img.icons8.com/color/40/c-plus-plus-logo.png"
                    alt="c-plus-plus-logo"
                    loading="lazy"
                  />
                </div>
                C++
              </div>
            </li>
            <li className="skill">
              <div className="content">
                <div className="img-container">
                  <img
                    width="38"
                    height="38"
                    src="https://img.icons8.com/color/38/javascript--v1.png"
                    alt="javascript--v1"
                    loading="lazy"
                  />
                </div>
                Javascript
              </div>
            </li>
            <li className="skill">
              <div className="content">
                <div className="img-container">
                  <img
                    width="40"
                    height="40"
                    src="https://img.icons8.com/bubbles/40/react.png"
                    alt="react"
                    loading="lazy"
                  />
                </div>
                React Js
              </div>
            </li>
          </ul>
          <ul className="sub-lists">
            <li className="skill">
              <div className="content">
                <div className="img-container">
                  <img
                    width="39"
                    height="39"
                    src="https://img.icons8.com/fluency/39/node-js.png"
                    alt="node-js"
                    loading="lazy"
                  />
                </div>
                Node Js
              </div>
            </li>
            <li className="skill">
              <div className="content">
                <div className="img-container">
                  <img
                    width="38"
                    height="38"
                    src="https://img.icons8.com/color/38/html-5--v1.png"
                    alt="html-5--v1"
                    loading="lazy"
                  />
                </div>
                HTML
              </div>
            </li>
            <li className="skill">
              <div className="content">
                <div className="img-container">
                  <img
                    width="38"
                    height="38"
                    src="https://img.icons8.com/color/38/mongodb.png"
                    alt="mongodb"
                    loading="lazy"
                  />
                </div>
                MongoDB
              </div>
            </li>
          </ul>
          <ul className="sub-lists">
            <li className="skill">
              <div className="content">
                <div className="img-container">
                  <img
                    width="38"
                    height="38"
                    src="https://img.icons8.com/color/38/css3.png"
                    alt="css3"
                    loading="lazy"
                  />
                </div>
                CSS
              </div>
            </li>
            <li className="skill">
              <div className="content">
                <div className="img-container">
                  <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/ios-filled/30/jquery.png"
                    alt="jquery"
                    loading="lazy"
                  />
                </div>
                jQuery
              </div>
            </li>
            <li className="skill">
              <div className="content">
                <div className="img-container">
                  <img
                    width="38"
                    height="38"
                    src="https://img.icons8.com/external-bearicons-blue-bearicons/38/external-SQL-file-extension-bearicons-blue-bearicons.png"
                    alt="external-SQL-file-extension-bearicons-blue-bearicons"
                    loading="lazy"
                  />
                </div>
                SQL
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="experience">
        <h2>Experience</h2>

        <section className="project">
          <h3>1&#41; QR Code</h3>
          <iframe
            src="https://subir-qr-code.netlify.app/"
            className="work-demo loading"
            title="qr-code"
          ></iframe>
        </section>

        <section className="project">
          <h3>2&#41; Know Your Shubh College</h3>
          <iframe
            src="https://know-your-shubh-college.netlify.app/"
            className="work-demo loading"
            title="college"
          ></iframe>
        </section>

        <section className="project">
          <h3>3&#41; Summary Component</h3>
          <iframe
            src="https://subir-summary-component.netlify.app/"
            className="work-demo loading"
            title="qr-code"
          ></iframe>
        </section>

        <section className="project">
          <h3>4&#41; QR Code</h3>
          <iframe
            src="https://subir-qr-code.netlify.app/"
            className="work-demo loading"
            title="qr-code"
          ></iframe>
        </section>
      </section>
    </div>
  );
};

export default Work;
