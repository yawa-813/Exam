import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been submitted. We'll contact you soon.`);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <Container className="my-5">
      <h1 className="text-center mb-5">Contact Us</h1>
      
      <Row>
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Contact Information</Card.Title>
              <Card.Text>
                <strong>Address:</strong><br />
                123 Education Street<br />
                Learning City, LC 12345<br /><br />
                
                <strong>Phone:</strong> (123) 456-7890<br />
                <strong>Email:</strong> info@sunshineacademy.edu<br /><br />
                
                <strong>Office Hours:</strong><br />
                Monday-Friday: 8:00 AM - 5:00 PM<br />
                Saturday: 9:00 AM - 12:00 PM<br />
                Sunday: Closed
              </Card.Text>
            </Card.Body>
          </Card>
          
          <Card className="mt-4">
            <Card.Body>
              <Card.Title>School Map</Card.Title>
              <div className="ratio ratio-16x9">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215209179535!2d-73.98784492416466!3d40.7484409713899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjQiTiA3M8KwNTknMDkuNyJX!5e0!3m2!1sen!2sus!4v1623252345678!5m2!1sen!2sus" 
                  allowFullScreen="" 
                  loading="lazy"
                  title="School Location"
                ></iframe>
              </div>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Send Us a Message</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control 
                    type="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control 
                    type="tel" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Subject</Form.Label>
                  <Form.Select 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="Admission">Admission Inquiry</option>
                    <option value="Academic">Academic Questions</option>
                    <option value="Financial">Financial Aid</option>
                    <option value="Other">Other</option>
                  </Form.Select>
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={5} 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    required 
                  />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                  Send Message
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;