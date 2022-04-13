import './App.css';
import ProjectCard from './components/ProjectCard'
import data from './data/projectData.js'
import Landing from './components/Landing'
import NavBar from './components/NavBar'
import Background from './components/Background';

function App() {
  return (
    <div className="App">
      <Background />
      <NavBar image={data.about.photo} description={data.about.description}/>
      <Landing />
      <div className="projects">
        <h3 className="project-title">projects</h3>
        <div className="project-grid-container">
            {data.projects.map((project, id)=>{
              return(
                <ProjectCard
                  key={id}
                  {...project} />
              )
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
