import { Col } from 'react-bootstrap'
import { AiFillGithub, AiOutlineWarning } from 'react-icons/ai'
import { CgWebsite } from 'react-icons/cg'
interface ProjectCardProps {
  title: string
  description: string
  imgUrl: string
  github: string
  website?: string
  warning?: boolean
}

export function ProjectCard({
  title,
  description,
  imgUrl,
  github,
  website,
  warning,
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
            {website && (
              <a href={website} target="_blank" rel="noopener noreferrer">
                <CgWebsite title="Website" size={40} />
              </a>
            )}
          </div>
          {warning && (
            <div>
              <AiOutlineWarning size={30} />{' '}
              <span>this application is under construction</span>
            </div>
          )}
        </div>
      </div>
    </Col>
  )
}
