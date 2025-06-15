import { useParams } from "react-router-dom";

const courses = [
    { id: 1, name: "React", desc: "Learn React." },
    { id: 2, name: "CSS", desc: "Learn CSS." },
    {
        id: 3,
        name: "Javascript",
        desc: "Learn Javascript.",
    },
];

export default function CourseDetails() {
    const { id } = useParams();
    const course = course.find((c) => c.id === parseInt(id));
    console.log(course);

    return (
        <div>
            <div>{course.title}</div>
            <div>{course.desc}</div>
        </div>
    );
}
