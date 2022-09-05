import { MouseEventHandler, useEffect, useState } from 'react'

import { Container, Nav, Navbar } from 'react-bootstrap'

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
} from 'react-icons/ai'

import logo from '../assets/img/logoVA.png'

export function NavBar() {
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      if (window.screenY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  function handleUpdateActiveLink(
    linkName: string,
  ): MouseEventHandler<HTMLElement> | undefined {
    setActiveLink(linkName)

    return undefined
  }

  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => handleUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => handleUpdateActiveLink('skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => handleUpdateActiveLink('projects')}
            >
              Projects
            </Nav.Link>
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
              <a
                href="https://www.linkedin.com/in/vinicius-ferreira-84b68b162/"
                target="_blanck"
                title="Link para o Linkedin"
              >
                Let`s Connect
              </a>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
