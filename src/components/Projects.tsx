import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'
import { ProjectCard } from './ProjectCard'
import accountsDesktop from '../assets/img/accountsDesktop.gif'
import testeOneBlueDesktop from '../assets/img/teste-one-blue-desktop.gif'
import testeGbmDesktop from '../assets/img/testegbmDesktop.gif'
import vizpertDesktop from '../assets/img/vizpertDesktop.gif'
import ecommerceDesktop from '../assets/img/ecommerceDesktop.gif'
import buildboxDesktop from '../assets/img/buildboxDesktop.gif'
import fasters from '../assets/img/fasters.gif'
import igniteTimer from '../assets/img/igniteTimer.gif'
import igniteTodo from '../assets/img/igniteTodo.gif'
import igniteFeed from '../assets/img/igniteFeed.gif'
import reductionRPMTest from '../assets/img/reductionRPMTest.gif'
import TPrime from '../assets/img/tprime.gif'
import WeatherDesktop from '../assets/img/WeatherDesktop.gif'
import FernandaVarellaDesktop from '../assets/img/FernandaVarellaDesktop.gif'
import qrideiaDesktop from '../assets/img/qrideiaDesktop.gif'
import TodoDesktop from '../assets/img/TodoDesktop.gif'
import sunnysideDesktop from '../assets/img/sunnysideDesktop.gif'
import calculadora from '../assets/img/calculadora.gif'
import pingpong from '../assets/img/pingpong.gif'
import allyHub from '../assets/img/allyhub.gif'
import govOne from '../assets/img/govone.gif'
import githubblog from '../assets/img/githubblog.gif'
import dtMonkey from '../assets/img/dtmoney.gif'
import coffeeDelivery from '../assets/img/coffeedelivery.gif'
import colorSharp2 from '../assets/img/color-sharp2.png'
import 'animate.css'
import TrackVisibility from 'react-on-screen'

export function Projects() {
  const projectsTab1 = [
    {
      title: 'Fasters',
      description: 'Schedule',
      imgUrl: fasters,
      github: 'https://github.com/viniciusferreira7/fasters',
      website: 'https://fasters-pi.vercel.app/',
    },
    {
      title: 'Ignite Timer',
      description: 'Pomodoro App',
      imgUrl: igniteTimer,
      github: 'https://github.com/viniciusferreira7/ignite-timer',
      website: 'https://ignite-timer-zeta.vercel.app/',
    },
    {
      title: 'Ignite Todo',
      description: 'to-do list',
      imgUrl: igniteTodo,
      github: 'https://github.com/viniciusferreira7/ignite-todo-list',
      website: 'https://ignite-todo-list-kappa.vercel.app/',
    },
    {
      title: 'GitHub Blog',
      description: 'Blog with github issues',
      imgUrl: githubblog,
      github: 'https://github.com/viniciusferreira7/github-blog',
      website: 'https://github-blog-tan-rho.vercel.app/',
    },
    {
      title: 'Ally Hub',
      description: 'Ally Hub challenge to mark destinations of interest.',
      imgUrl: allyHub,
      github: 'https://github.com/viniciusferreira7/ally-hub-challenge-2',
      website: 'http://ally-hub-challenge-2.vercel.app/',
    },
    {
      title: 'DT Monkey',
      description: 'Personal financial control.',
      imgUrl: dtMonkey,
      github: 'https://github.com/viniciusferreira7/dt-monkey',
    },
    {
      title: 'Coffee Delivery',
      description: 'Coffee sales page.',
      imgUrl: coffeeDelivery,
      github: 'https://github.com/viniciusferreira7/coffee-delivery',
      website: 'https://coffee-delivery-ivory-alpha.vercel.app/',
    },
  ]
  const projectsTab2 = [
    {
      title: 'BuildBox',
      description:
        'A page using React.js that contains a list of posts with the possibility to add and remove. Each post has name, message and photo.',
      imgUrl: buildboxDesktop,
      github: 'https://github.com/viniciusferreira7/Buildbox',
    },
    {
      title: 'Ignite Feed',
      description: 'a feed of comments',
      imgUrl: igniteFeed,
      github: 'https://github.com/viniciusferreira7/ignite-feed-ts',
      website: 'https://ignite-feed-ts-inky.vercel.app/',
    },
    {
      title: 'Teste Gbm',
      description:
        'An application that informs the unloaded wagons of the three railroads in the port of Santos, as well as their plates, unloading times and the volume unloaded.',
      imgUrl: testeGbmDesktop,
      github: 'https://github.com/viniciusferreira7/teste-gbm',
      website: 'https://curious-panda-765898.netlify.app/',
    },
    {
      title: 'GovOne Notícias',
      description: 'News portal',
      imgUrl: govOne,
      github: 'https://github.com/viniciusferreira7/govone-challenge',
      website: 'https://govone-challenge.vercel.app/',
    },
    {
      title: 'TECH-LIBRARY-Vizpert',
      description:
        'The app basically consists of a bookshelf where the user can organize books and order them based on some characteristic of them.',
      imgUrl: vizpertDesktop,
      github: 'https://github.com/viniciusferreira7/TECH-LIBRARY-Vizpert',
      website: 'https://boring-mccarthy-70ced4.netlify.app/',
    },
    {
      title: 'WeatherDesktop',
      description: 'Website to see the weather forecast',
      imgUrl: WeatherDesktop,
      github: 'https://github.com/viniciusferreira7/tempo',
      website: 'https://tempo-one.vercel.app/',
    },
    {
      title: 'Ecommerce Product Page Main',
      description: 'A simple e-commerce page',
      imgUrl: ecommerceDesktop,
      github:
        'https://github.com/viniciusferreira7/ecommerce-product-page-main',
      website: 'https://ecommerce-product-page-main-psi.vercel.app/',
    },
  ]

  const projectsTab3 = [
    {
      title: 'Reduction RPM Test',
      description: 'RPM reduction test for Bonfiglioli',
      imgUrl: reductionRPMTest,
      github: 'https://github.com/viniciusferreira7/reduction-rpm-test',
      website: 'https://fancy-kashata-61b310.netlify.app/',
    },
    {
      title: 'TPrime',
      description: 'A site where the user can add postsCard',
      imgUrl: TPrime,
      github: 'https://github.com/viniciusferreira7/Tprime',
      website: 'https://naughty-hamilton-6153ab.netlify.app/',
    },
    {
      title: 'Accounts',
      description: 'Simulates a bank account through the terminal.',
      imgUrl: accountsDesktop,
      github: 'https://www.linkedin.com/in/vinicius-ferreira-84b68b162/',
    },
    {
      title: 'Teste One Blue Desktop',
      description:
        'This application integrates with the backend application present in this repository (https://github.com/oneblueapp/testing_react_js) the purpose of this application is a visual interaction with the user registration and login API. With error dealings.',
      imgUrl: testeOneBlueDesktop,
      github: 'https://github.com/viniciusferreira7/teste-one-blue',
    },
    {
      title: 'Fernanda Varella',
      description: 'Project carried out during the Front-End course.',
      imgUrl: FernandaVarellaDesktop,
      github: 'https://github.com/viniciusferreira7/Fernanda-Varella-Slovinski',
      website: 'https://fernanda-varella-slovinski.vercel.app/',
    },
    {
      title: 'QrIdeia',
      description: 'A simple react page',
      imgUrl: qrideiaDesktop,
      github: 'https://github.com/viniciusferreira7/QRIDEIA',
      website: 'https://stupefied-hamilton-eeccd9.netlify.app/',
    },
    {
      title: 'Todo',
      description: 'A list made using ReactJS',
      imgUrl: TodoDesktop,
      github: 'https://github.com/viniciusferreira7/todo-list',
    },
    {
      title: 'Sunnyside',
      description: 'Landing page',
      imgUrl: sunnysideDesktop,
      github: 'https://github.com/viniciusferreira7/Sunnyside',
    },
    {
      title: 'Calculadora',
      description: 'Calculator',
      imgUrl: calculadora,
      github: 'https://github.com/viniciusferreira7/Calculadora',
      website: 'https://calculadora-rust.vercel.app/',
    },
    {
      title: 'Ping Pong',
      description: 'Ping pong animation made with CSS3.',
      imgUrl: pingpong,
      github: 'https://github.com/viniciusferreira7/Ping-pong',
    },
  ]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Here you can find the projects that I consider most
                    important on my GitHub
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? 'animate__animated animate__slideInUp' : ''
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projectsTab1.map((project, index) => {
                            return <ProjectCard key={index} {...project} />
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projectsTab2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projectsTab3.map((project, index) => {
                            return <ProjectCard key={index} {...project} />
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}
