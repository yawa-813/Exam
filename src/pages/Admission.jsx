import { Container, Table, Card, Button, ListGroup } from 'react-bootstrap';

function Admission() {
  const admissionSteps = [
    "Submit online application form",
    "Provide academic records from previous school",
    "Complete placement assessment (if required)",
    "Participate in family interview",
    "Receive admission decision",
    "Complete enrollment paperwork and payment"
  ];

  const requirements = [
    { grade: "Kindergarten", age: "5 years by September 1", tests: "Readiness assessment" },
    { grade: "Grades 1-6", age: "Appropriate for grade level", tests: "Previous school records" },
    { grade: "Grades 7-9", age: "Appropriate for grade level", tests: "Math & English assessment" },
    { grade: "Grades 10-12", age: "Appropriate for grade level", tests: "Transcript review, Math & English assessment" }
  ];

  return (
    <Container className="my-5">
      <h1 className="text-center mb-5">Admission Process</h1>
      
      <Card className="mb-5">
        <Card.Body>
          <Card.Title>Application Timeline</Card.Title>
          <Card.Text>
            <strong>Fall Admission:</strong> Applications accepted January-March<br />
            <strong>Spring Admission:</strong> Limited spaces available (apply by November 1)<br />
            <strong>Rolling Admission:</strong> Based on availability after main admission periods
          </Card.Text>
        </Card.Body>
      </Card>

      <h2 className="mb-4">Admission Steps</h2>
      <ListGroup as="ol" numbered className="mb-5">
        {admissionSteps.map((step, index) => (
          <ListGroup.Item as="li" key={index}>{step}</ListGroup.Item>
        ))}
      </ListGroup>

      <h2 className="mb-4">Grade-Level Requirements</h2>
      <Table striped bordered hover responsive className="mb-5">
        <thead>
          <tr>
            <th>Grade Level</th>
            <th>Age Requirement</th>
            <th>Assessment Requirements</th>
          </tr>
        </thead>
        <tbody>
          {requirements.map((req, index) => (
            <tr key={index}>
              <td>{req.grade}</td>
              <td>{req.age}</td>
              <td>{req.tests}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Card bg="primary" text="white">
        <Card.Body>
          <Card.Title>Ready to Apply?</Card.Title>
          <Card.Text>
            Begin your application today or contact our admission office for more information.
          </Card.Text>
          <Button variant="light" className="me-3">Start Application</Button>
          <Button variant="outline-light">Contact Admission</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Admission;