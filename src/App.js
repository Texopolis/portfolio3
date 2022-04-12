import './App.css';
import ProjectCard from './components/ProjectCard'
import data from './data/projectData.js'
import Landing from './components/Landing'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Landing />
      <div className="projects">
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
