import { Container, Accordion, Card } from 'react-bootstrap';

function Programs() {
  const departments = [
    {
      name: "Elementary School",
      description: "Our elementary program focuses on foundational skills in reading, writing, mathematics, science, and social studies, while nurturing curiosity and creativity.",
      programs: ["Kindergarten", "Grade 1-3 (Primary)", "Grade 4-6 (Intermediate)"]
    },
    {
      name: "Middle School",
      description: "The middle school curriculum challenges students academically while supporting their social and emotional development during these critical years.",
      programs: ["Grade 7", "Grade 8"]
    },
    {
      name: "High School",
      description: "Our comprehensive high school program prepares students for college and career with a wide range of academic and extracurricular opportunities.",
      programs: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"]
    },
    {
      name: "Special Programs",
      description: "We offer specialized programs to meet diverse learning needs and interests.",
      programs: ["STEM Academy", "Arts Conservatory", "Athletics Program", "International Baccalaureate"]
    }
  ];

  return (
    <Container className="my-5">
      <h1 className="text-center mb-5">Academic Programs</h1>
      
      <p className="lead text-center mb-5">
        Sunshine Academy offers a comprehensive curriculum designed to challenge 
        students and prepare them for success in college, career, and life.
      </p>

      <Accordion defaultActiveKey="0" className="mb-5">
        {departments.map((dept, index) => (
          <Accordion.Item eventKey={index.toString()} key={index}>
            <Accordion.Header>{dept.name}</Accordion.Header>
            <Accordion.Body>
              <p>{dept.description}</p>
              <h5>Programs Offered:</h5>
              <ul>
                {dept.programs.map((program, i) => (
                  <li key={i}>{program}</li>
                ))}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>

      <Card className="bg-light">
        <Card.Body>
          <Card.Title>Additional Learning Opportunities</Card.Title>
          <Card.Text>
            <strong>Extracurricular Activities:</strong> Music, Drama, Robotics, Debate, Sports<br />
            <strong>Community Service:</strong> Required for all high school students<br />
            <strong>Study Abroad:</strong> Exchange programs with partner schools worldwide
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Programs;