import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import colorSharp from '../assets/img/color-sharp.png'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

export function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>These are some of my main skills</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <div style={{ width: 200, height: 200 }}>
                    <CircularProgressbar
                      value={0.95}
                      maxValue={1}
                      text={`${0.95 * 100}%`}
                      styles={buildStyles({
                        pathColor: `#642859`,
                        textColor: '#fff',
                      })}
                    />
                  </div>
                  <h5>HTML5</h5>
                </div>
                <div className="item">
                  <div style={{ width: 200, height: 200 }}>
                    <CircularProgressbar
                      value={0.9}
                      maxValue={1}
                      text={`${0.9 * 100}%`}
                      styles={buildStyles({
                        pathColor: `#642859`,
                        textColor: '#fff',
                      })}
                    />
                  </div>
                  <h5>CSS3</h5>
                </div>
                <div className="item">
                  <div style={{ width: 200, height: 200 }}>
                    <CircularProgressbar
                      value={0.85}
                      maxValue={1}
                      text={`${0.85 * 100}%`}
                      styles={buildStyles({
                        pathColor: `#642859`,
                        textColor: '#fff',
                      })}
                    />
                  </div>
                  <h5>React.js</h5>
                </div>
                <div className="item">
                  <div style={{ width: 200, height: 200 }}>
                    <CircularProgressbar
                      value={0.83}
                      maxValue={1}
                      text={`${0.83 * 100}%`}
                      styles={buildStyles({
                        pathColor: `#642859`,
                        textColor: '#fff',
                      })}
                    />
                  </div>
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <div style={{ width: 200, height: 200 }}>
                    <CircularProgressbar
                      value={0.65}
                      maxValue={1}
                      text={`${0.65 * 100}%`}
                      styles={buildStyles({
                        pathColor: `#642859`,
                        textColor: '#fff',
                      })}
                    />
                  </div>
                  <h5>TypeScript</h5>
                </div>
                <div className="item">
                  <div style={{ width: 200, height: 200 }}>
                    <CircularProgressbar
                      value={0.45}
                      maxValue={1}
                      text={`${0.45 * 100}%`}
                      styles={buildStyles({
                        pathColor: `#642859`,
                        textColor: '#fff',
                      })}
                    />
                  </div>
                  <h5>Next.js</h5>
                </div>
                <div className="item">
                  <div style={{ width: 200, height: 200 }}>
                    <CircularProgressbar
                      value={0.8}
                      maxValue={1}
                      text={`${0.8 * 100}%`}
                      styles={buildStyles({
                        pathColor: `#642859`,
                        textColor: '#fff',
                      })}
                    />
                  </div>
                  <h5>Styled-components</h5>
                </div>
                <div className="item">
                  <div style={{ width: 200, height: 200 }}>
                    <CircularProgressbar
                      value={0.4}
                      maxValue={1}
                      text={`${0.4 * 100}%`}
                      styles={buildStyles({
                        pathColor: `#642859`,
                        textColor: '#fff',
                      })}
                    />
                  </div>
                  <h5>Storybook</h5>
                </div>
                <div className="item">
                  <div style={{ width: 200, height: 200 }}>
                    <CircularProgressbar
                      value={0.25}
                      maxValue={1}
                      text={`${0.25 * 100}%`}
                      styles={buildStyles({
                        pathColor: `#642859`,
                        textColor: '#fff',
                      })}
                    />
                  </div>
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  <div style={{ width: 200, height: 200 }}>
                    <CircularProgressbar
                      value={0.3}
                      maxValue={1}
                      text={`${0.3 * 100}%`}
                      styles={buildStyles({
                        pathColor: `#642859`,
                        textColor: '#fff',
                      })}
                    />
                  </div>
                  <h5>Express.js</h5>
                </div>
                <div className="item">
                  <div style={{ width: 200, height: 200 }}>
                    <CircularProgressbar
                      value={0.2}
                      maxValue={1}
                      text={`${0.2 * 100}%`}
                      styles={buildStyles({
                        pathColor: `#642859`,
                        textColor: '#fff',
                      })}
                    />
                  </div>
                  <h5>MySQL</h5>
                </div>
                <div className="item">
                  <div style={{ width: 200, height: 200 }}>
                    <CircularProgressbar
                      value={0.3}
                      maxValue={1}
                      text={`${0.3 * 100}%`}
                      styles={buildStyles({
                        pathColor: `#642859`,
                        textColor: '#fff',
                      })}
                    />
                  </div>
                  <h5>Jest</h5>
                </div>
                <div className="item">
                  <div style={{ width: 200, height: 200 }}>
                    <CircularProgressbar
                      value={0.75}
                      maxValue={1}
                      text={`${0.75 * 100}%`}
                      styles={buildStyles({
                        pathColor: `#642859`,
                        textColor: '#fff',
                      })}
                    />
                  </div>
                  <h5>JQuery</h5>
                </div>
                <div className="item">
                  <div style={{ width: 200, height: 200 }}>
                    <CircularProgressbar
                      value={0.6}
                      maxValue={1}
                      text={`${0.6 * 100}%`}
                      styles={buildStyles({
                        pathColor: `#642859`,
                        textColor: '#fff',
                      })}
                    />
                  </div>
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <div style={{ width: 200, height: 200 }}>
                    <CircularProgressbar
                      value={0.43}
                      maxValue={1}
                      text={`${0.43 * 100}%`}
                      styles={buildStyles({
                        pathColor: `#642859`,
                        textColor: '#fff',
                      })}
                    />
                  </div>
                  <h5>Material-UI</h5>
                </div>
                <div className="item">
                  <div style={{ width: 200, height: 200 }}>
                    <CircularProgressbar
                      value={0.32}
                      maxValue={1}
                      text={`${0.32 * 100}%`}
                      styles={buildStyles({
                        pathColor: `#642859`,
                        textColor: '#fff',
                      })}
                    />
                  </div>
                  <h5>Chakra UI</h5>
                </div>
                <div className="item">
                  <div style={{ width: 200, height: 200 }}>
                    <CircularProgressbar
                      value={0.2}
                      maxValue={1}
                      text={`${0.2 * 100}%`}
                      styles={buildStyles({
                        pathColor: `#642859`,
                        textColor: '#fff',
                      })}
                    />
                  </div>
                  <h5>Tailwind CSS</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
