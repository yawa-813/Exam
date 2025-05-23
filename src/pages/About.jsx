import { Container, Row, Col, Card } from 'react-bootstrap';

function About() {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-5">About Davao Central College</h1>
      
      <Row className="mb-5">
        <Col md={6}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Our Vision</Card.Title>
              <Card.Text>
                To be a leading educational institution in Mindanao, fostering academic excellence, 
                moral integrity, and service to the community.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Our Mission</Card.Title>
              <Card.Text>
                To provide affordable, quality education that equips students with knowledge, skills, 
                and values for lifelong success and societal contribution.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2 className="mb-4">History</h2>
          <p>
            Founded in 1948, Davao Central College has grown from a small school to a premier 
            institution offering K-12 and college programs. Recognized by CHED and DEPED, DCC 
            continues to serve Davao City with pride.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;