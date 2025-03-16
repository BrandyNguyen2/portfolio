import tech from './techstack-img.png';
import me from './me.JPG';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style="">Brandy Nguyen</h1>
        <nav>
          <ul>
            <li><a href="#hero">About Me</a></li>
            <li><a href="#tools">Tools</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact Me</a></li>
          </ul>
        </nav>

        <section id="hero">
          <h2>About Me</h2>
          <img src={me}alt="me" width="300" height="400" />
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
          <p>HTML, CSS, Javascript, TypeScript, React, Java, Node.js, AWS</p>
          <img src={tech} alt="Tech Stack" width="800" height="300" />
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div>
            <h3>Code Red</h3>
            <p>TypeScript, Phaser.js, Colyseus, HTML, CSS</p>
            <p>Description:</p>
          </div>
          <div>
            <h3>Smell You Later</h3>
            <p>React Native, TypeScript, Python, FastAPI, Google Gemini</p>
            <p>Description:</p>
          </div>
          <div>
            <h3>Kanban Board</h3>
            <p>React, Flask, MongoDB, AWS</p>
            <p>Description:</p>
          </div>
        </section>

        <footer id="contact">
          <h2>Contact Me</h2>
          <p><b>Email</b></p>
          <p><a href="mailto:Brandy.Nguyen02@yahoo.com">Brandy.Nguyen02@yahoo.com</a></p>
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
