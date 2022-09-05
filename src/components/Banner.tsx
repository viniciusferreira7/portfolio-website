import { useState, useEffect } from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import { BsFillArrowRightCircleFill } from 'react-icons/bs'

import headerImg from '../assets/img/header-img.svg'

export function Banner() {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(400 - Math.random() * 100)
  const period = 1000

  useEffect(() => {
    const toRotate = [
      ', I am a Front End Developer',
      ', my is stacks are React.js, Next.js, TypeScript, Node.js, MySQL',
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
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi my name is Vinicius`}
              <span className="txt-rotate">
                <span className="wrap">{text}</span>
              </span>
            </h1>
            <p>
              I`m looking for an opportunity to get into the development area,
              despite not having professional experience, I have several
              projects with a repository on GitHub.
            </p>
            <button onClick={() => console.log('connect')}>
              Let`s connect <BsFillArrowRightCircleFill size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header img" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
