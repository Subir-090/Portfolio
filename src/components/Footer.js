import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <p>Subir Gupta</p>
        <p>Copyright &copy; 2023 Subir Gupta</p>
        <div className="footer-links">
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <img
              width="38"
              height="38"
              src="https://img.icons8.com/fluency/38/linkedin-circled.png"
              alt="linkedin-circled"
            />
            LinkedIn
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <img
              width="38"
              height="38"
              src="https://img.icons8.com/sf-regular-filled/38/FFFFFF/github.png"
              alt="github"
            />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
