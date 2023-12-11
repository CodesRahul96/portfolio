import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import VideoX from '../../Assets/videox.png'
import StreamCR from '../../Assets/cr-tv.png'
import netfliximage from '../../Assets/React-App-netflix-clone.png'
import Portfolio from '../../Assets/potfolio.png'
import charlespizza from '../../Assets/Charlestown-Pizza.png'
import todolist from '../../Assets/todolist.png'

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Portfolio}
                isBlog={false}
                title="Portfolio"
                description="A portfolio website is a curated, online space that showcases your best work. It's one of the most practical and memorable ways to share your work with press, potential collaborators or employers. Much like your PDF portfolio, a portfolio website can be used when applying for jobs or internships."
                ghLink="https://coderrahul.netlify.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={VideoX}
                isBlog={false}
                title="VideoX App"
                description="
                VideoX APP is a movie web application project that involves creating components to display a list of movies and series details about each movie or series along with a search functionality.VideoX App is an online database of information related to films, television series, podcasts, home videos and streaming content online including cast, production crew and personal biographies, plot summaries, trivia, ratings, and fan and critical reviews."
                ghLink="https://videox.netlify.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={netfliximage}
                isBlog={false}
                title="Netflix-Clone"
                description="Netflix-Clone project is a simplified front-end clone of Netflix. It was created with React js. It uses TMDB (The Movie Data Base ) API and uses the Axios tool. Users can click movie images with embedded YouTube trailers or related videos about the movie."
                ghLink="https://coderrahul-netflixclone.netlify.app/"
              />
            </Col>

          
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={StreamCR}
                isBlog={false}
                title="Stream CR-IPTV"
                description="Stream CR-IPTV is a online tv streaming website completely build with React with fully responsive, in this application you can watch Indian Live TV channels free of cost. It allows you to watch your favorite movies and T.V. shows channels with a compatible device. This IPTV provider also allows you to stream this service with the Small and Wide Screen devices"
                ghLink="https://cr-tv.netlify.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={todolist}
                isBlog={false}
                title="To Do List"
                description=" To-Do App that build will allow a user to add a task to a list of to-do items. Once the task is added, the user will be able to delete it as completed once it has done."
                ghLink="https://github.com/coderrahul-github"

              />
            </Col>

            {/* <Col md={4} className="project-card">
              <ProjectCard
                imgPath={olximage}
                isBlog={false}
                title="Olx-Clone"
                description="Olx-clone builds with react js. using firebase as a backend and deploying in firebase. Olx-Clone is a potential classified advertisement website that categorizes objects in a user-friendly manner & displays them as advertisements.. Classifieds can be posted that involve selling, and buying using React-router, context, react hooks."
                ghLink="https://github.com/coderrahul-github"
              />
            </Col> */}
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist