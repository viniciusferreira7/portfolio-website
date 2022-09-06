import { Col } from 'react-bootstrap'
import { AiFillGithub } from 'react-icons/ai'
import { CgWebsite } from 'react-icons/cg'
interface ProjectCardProps {
  title: string
  description: string
  imgUrl: string
  github: string
  website?: string
}

export function ProjectCard({
  title,
  description,
  imgUrl,
  github,
  website,
}: ProjectCardProps) {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="proj-icons">
            <a href={github} target="_blank" rel="noopener noreferrer">
              <AiFillGithub title="GitHub" size={40} />
            </a>
            {website ? (
              <a href={website} target="_blank" rel="noopener noreferrer">
                <CgWebsite title="Website" size={40} />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </Col>
  )
}
