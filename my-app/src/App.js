import logo from './cloud.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Brandy Nguyen</h1>
        <nav>
          <ul>
            <li><a href="#hero">My Hero</a></li>
            <li><a href="#tools">Tools</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact Me</a></li>
          </ul>
        </nav>

        <section id="hero">
          <h2>My Hero Section</h2>
          <img src="me.JPG" alt="Hero" width="300" height="400" />
          <p>
            I'm interested in learning new programming languages and skills<br />
            🌱 I'm currently learning Frontend engineering, Backend engineering, Computer Networks, and Software Design<br />
            👨‍💻 I'm looking to collaborate on new challenging projects!<br />
            😄 Pronouns: He/Him<br />
            😎 Fun fact: I collect Star Wars figurines.
          </p>
          
          <table border="1">
            <thead>
              <tr>
                <th>Level of Education</th>  
                <th>Institute Name</th>
                <th>Major</th>
                <th>GPA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bachelors</td>
                <td>California State University, Fullerton</td>
                <td>Computer Science</td>
                <td>3.62</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="tools">
          <h2>Tools</h2>
          <p>HTML, CSS, Javascript, TypeScript, React, Java, Node.js, Express.js, AWS</p>
          <img src="techstack-img.png" alt="Tech Stack" width="800" height="300" />
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div>
            <h3>Fitbit analysis system</h3>
            <p>Azure Databricks, Delta Lake, Lakehouse, PySpark, Kafka, Python, Java, SQL</p>
            <p>A real-time fitness tracker in Azure Cloud services monitors heart rate, leveraging Kafka for real-time data tracking</p>
          </div>
          <div>
            <h3>Active Online Learning to Differentiate Social Media Posts</h3>
            <p>Python, Machine Learning, Django</p>
            <p>Social media application that filters posts to identify whether it is a hate comment. If it is a hate comment, the post gets deleted, and the user gets reported.</p>
          </div>
          <div>
            <h3>Near By Stores & Services</h3>
            <p>Node, Express, MongoDB, React</p>
            <p>Web application that help people discover if a product is at a nearby store. We can also locate stores close to the user's current location and available products at that store.</p>
          </div>
        </section>

        <footer id="contact">
          <h2>Contact Me</h2>
          <p><b>Email</b></p>
          <p><a href="mailto:Brandy.Nguyen02@csu.fullerton.edu">Brandy.Nguyen02@csu.fullerton.edu</a></p>
          <ul>
            <li><a href="https://www.linkedin.com/in/brandynguyen02/">LinkedIn</a></li>
            <li><a href="https://github.com/BrandyNguyen2">GitHub</a></li>
          </ul>
        </footer>
      </header>
    </div>
  );
}

export default App;
