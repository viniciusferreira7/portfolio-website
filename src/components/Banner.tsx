import { useState, useEffect } from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import { BsFillArrowRightCircleFill } from 'react-icons/bs'

import headerImg from '../assets/img/header-img.svg'

import TrackVisibility from 'react-on-screen'

export function Banner() {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(400 - Math.random() * 100)
  // eslint-disable-next-line no-unused-vars
  const [index, setIndex] = useState(1)

  const period = 1000

  useEffect(() => {
    const toRotate = [
      ' working to be a Full Stack Developer soon...',
      ' with solid knowledge in React.js, Next.js, TypeScript, Node.js, MySQL stacks',
      ', coming soon to Full Stack Developer',
    ]

    function tick() {
      const i = loopNum % toRotate.length
      const fullText = toRotate[i]
      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)

      setText(updatedText)

      if (isDeleting) {
        setDelta((prevDelta) => prevDelta / 2)
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true)
        setDelta(period)
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
        setDelta(500)
      } else {
        setIndex((prevIndex) => prevIndex + 1)
      }
    }
    const ticker = setInterval(() => {
      tick()
    }, delta)

    return () => {
      clearInterval(ticker)
    }
  }, [text, delta, isDeleting, loopNum])

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aling-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi, I’m Vinicius: a Front End  Developer`}
                    <span className="txt-rotate">
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    I’m looking for an opportunity in the development area. I
                    already published several projects into GitHub. Please check
                    them!
                  </p>
                  <button onClick={() => console.log('connect')}>
                    <a
                      href="https://www.linkedin.com/in/vinicius-ferreira-84b68b162/"
                      target="_blanck"
                      title="Link para o Linkedin"
                    >
                      Let`s connect <BsFillArrowRightCircleFill size={25} />
                    </a>
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__zoomIn' : ''
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
