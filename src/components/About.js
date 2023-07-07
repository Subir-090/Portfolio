import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="image">
        <img loading="lazy" src="https://tinyurl.com/53sy5tjr" alt="profile-img" />
      </div>
      <table className="about-table">
        <tbody>
          <tr>
            <th>Name</th>
            <td>Subir Gupta</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>23</td>
          </tr>
          <tr>
            <th>Address</th>
            <td>Tripura</td>
          </tr>
          <tr>
            <th>Contact Number</th>
            <td>N.A.</td>
          </tr>
          <tr>
            <th>Email Id</th>
            <td>subirgupta090@gmail.com</td>
          </tr>
          <tr>
            <th>Current Employment</th>
            <td>SDE at Capital One</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default About;
