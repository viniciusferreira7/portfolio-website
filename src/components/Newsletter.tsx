import { useState, useEffect, FormEvent } from 'react'
import { Col, Row, Alert } from 'react-bootstrap'

interface NewsLetterProps {
  status: 'success' | 'sending' | 'error' | null
  message: string | any
  onValidated: any
}

export function Newsletter({ status, message, onValidated }: NewsLetterProps) {
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (status === 'success') clearFields()
  }, [status])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    email &&
      email.indexOf('@') > -1 &&
      onValidated({
        EMAIL: email,
      })
  }

  function clearFields() {
    setEmail('')
  }

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>
              Subscribe to our Newsletter<br></br> Never miss latest updates
            </h3>
            {status === 'sending' && <Alert>Sending...</Alert>}
            {status === 'error' && <Alert variant="danger">{message}</Alert>}
            {status === 'success' && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                />
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  )
}
