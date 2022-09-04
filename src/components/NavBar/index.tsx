import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
} from 'react-icons/ai'

export function NavBar() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src="" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://github.com/viniciusferreira7"
                target="_blanck"
                title="Link para o Github"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/vinicius-ferreira-84b68b162/"
                target="_blanck"
                title="Link para o Linkedin"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://www.instagram.com/viniciusaf0/"
                target="_blanck"
                title="Link para o Instagram"
              >
                <AiFillInstagram />
              </a>
              <a
                href="https://web.facebook.com/profile.php?id=100006780847667&_rdc=1&_rdr"
                target="_blanck"
                title="Link para o Facebook"
              >
                <AiFillFacebook />
              </a>
            </div>
            <button className="vvd" onClick={() => console.log('connect')}>
              <span>Let`s Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
