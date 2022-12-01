import "./App.css";
import ProjectCard2 from "./components/ProjectCard2";
import { projects, about } from "./data/projectData.js";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import back from "./images/gridBkg.png";

function App() {
  return (
    <div className="App">
      <ParallaxBanner style={{ minHeight: "200vh" }}>
        <ParallaxBannerLayer speed={-50}>
          <img src={back} alt="background" className="background" />
        </ParallaxBannerLayer>
        <Nav image={about.photo} description={about.description}/>
        <Landing />
        <Container maxWidth="lg" direction="column">
          <Typography
            variant="h3"
            color="rgba(255, 255, 255, 0.562)"
            sx={{ my: 5 }}
          fontFamily="Special Elite">
            Projects
          </Typography>
          <Grid container gap={2} justifyContent="center" alignItems="stretch">
            {projects.map((project, id) => {
              return (
                <Grid item key={id} xs={6} md={4} lg={3}>
                  <ProjectCard2 {...project} />
                </Grid>
              );
            })}
          </Grid>
        </Container>
        <Footer />
      </ParallaxBanner>
    </div>
  );
}

export default App;
