import { useParams, Link } from "react-router-dom";
import { Button } from "@mui/material";

const courses = [
    { id: 1, name: "React", desc: "Learn React." },
    { id: 2, name: "CSS", desc: "Learn CSS." },
    { id: 3, name: "Javascript", desc: "Learn Javascript." },
];

export default function CourseDetails() {
    const { id } = useParams();
    const course = courses.find((c) => c.id === parseInt(id));

    return (
        <div className="course-details">
            <h2>{course.name}</h2>
            <p>{course.desc}</p>
            <Button
                variant="contained"
                component={Link}
                to={`/courses/${course.id}/register`}>
                Register for this course
            </Button>
        </div>
    );
}
