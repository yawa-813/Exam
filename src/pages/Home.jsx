import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  const stats = [
    { value: '75+', label: 'Years of Excellence' },
    { value: '95%', label: 'Graduation Rate' },
    { value: '1:15', label: 'Student-Teacher Ratio' },
    { value: '20+', label: 'Degree Programs' }
  ];

  const features = [
    { icon: '🎓', title: 'Quality Education', description: 'CHED-recognized programs with expert faculty' },
    { icon: '💻', title: 'Modern Facilities', description: 'Computer labs, libraries, and research centers' },
    { icon: '🤝', title: 'Community Engagement', description: 'Service-learning and outreach programs' },
    { icon: '🌏', title: 'Global Readiness', description: 'Partnerships with international institutions' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section bg-primary text-white">
        <Container className="py-5 text-center">
          <h1 className="display-4 fw-bold mb-4">Welcome to Davao Central College</h1>
          <p className="lead mb-5">
            A legacy of academic excellence since 1948
          </p>
          <div>
            <Button as={Link} to="/admission" variant="light" size="lg" className="me-3">
              Enroll Now
            </Button>
            <Button as={Link} to="/programs" variant="outline-light" size="lg">
              Explore Degrees
            </Button>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Why Choose DCC?</h2>
          <Row className="g-4">
            {features.map((feature, index) => (
              <Col md={3} sm={6} key={index}>
                <Card className="h-100 text-center border-0 shadow-sm">
                  <Card.Body className="py-4">
                    <div className="display-4 mb-3">{feature.icon}</div>
                    <h5>{feature.title}</h5>
                    <p className="mb-0">{feature.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;