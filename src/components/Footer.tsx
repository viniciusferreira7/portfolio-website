import { Container, Row, Col } from 'react-bootstrap'
import { MailchimpForm } from './MailchimpForm'
import logo from '../assets/img/logoVA.png'

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
} from 'react-icons/ai'

export function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <a
              href="https://github.com/viniciusferreira7"
              target="_blanck"
              title="Link para o Github"
            >
              <AiFillGithub title="GitHub" />
            </a>
            <a
              href="https://www.linkedin.com/in/vinicius-ferreira-84b68b162/"
              target="_blanck"
              title="Link para o Linkedin"
            >
              <AiFillLinkedin title="Linkedin" />
            </a>
            <a
              href="https://www.instagram.com/viniciusaf0/"
              target="_blanck"
              title="Link para o Instagram"
            >
              <AiFillInstagram title="instagram" />
            </a>
            <a
              href="https://web.facebook.com/profile.php?id=100006780847667&_rdc=1&_rdr"
              target="_blanck"
              title="Link para o Facebook"
            >
              <AiFillFacebook title="Facebook" />
            </a>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
