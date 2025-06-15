import { Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const courses = [
    { id: 1, name: "React", desc: "Learn React." },
    { id: 2, name: "CSS", desc: "Learn CSS." },
    {
        id: 3,
        name: "Javascript",
        desc: "Learn Javascript.",
    },
];

export default function Courses() {
    return (
        <div className="container mt-4">
            <Row>
                {courses.map((course) => (
                    <Col md={4} key={course.id} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>{course.name}</Card.Title>
                                <Card.Text>{course.desc}</Card.Text>
                                <Button as={Link} to={`/courses/${course.id}`}>
                                    Learn more...
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}
