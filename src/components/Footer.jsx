import { Container, Row, Col } from 'react-bootstrap';

function FooterComponent() {
  return (
    <footer className="bg-primary text-white py-4 mt-auto">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Davao Central College</h5>
            <p>Empowering minds since 1948.</p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">Home</a></li>
              <li><a href="/about" className="text-white">About DCC</a></li>
              <li><a href="/programs" className="text-white">Programs</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact</h5>
            <address>
              F. Torres St., Davao City<br />
              Philippines, 8000<br />
              Phone: (082) 221-4070<br />
              Email: info@davaocentralcollege.edu.ph
            </address>
          </Col>
        </Row>
        <Row>
          <Col className="text-center pt-3">
            <p>&copy; {new Date().getFullYear()} Davao Central College. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default FooterComponent;