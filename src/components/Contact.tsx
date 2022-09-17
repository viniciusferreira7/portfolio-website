import { FormEvent, useRef, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import emailjs from '@emailjs/browser'
import contactImg from '../assets/img/contact-img.svg'
import 'animate.css'
import TrackVisibility from 'react-on-screen'

export function Contact() {
  const form = useRef<HTMLFormElement | null>(null)
  const [buttonText, setButtonText] = useState('Send')

  const handleSendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setButtonText('Sending...')

    emailjs
      .sendForm(
        'service_xt683hc',
        'template_briyphi',
        form.current !== null ? form.current : '',
        'bq5CYNhITBbBCDiHI',
      )
      .then(
        (result) => {
          console.log(result.text)
          setButtonText('Send')
        },
        (error) => {
          console.log(error.text)
        },
      )
  }

  return (
    <section className="contact">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? 'animate__animated animate__zoomIn' : ''
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Get In Touch</h2>
                  <form ref={form} onSubmit={handleSendEmail}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          name="user_name"
                          placeholder="First Name"
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          name="user_last_name"
                          placeholder="Last Name"
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" placeholder="Email Address" />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          name="user_phone"
                          placeholder="Phone No."
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          placeholder="Message"
                          name="user_text"
                        ></textarea>
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
