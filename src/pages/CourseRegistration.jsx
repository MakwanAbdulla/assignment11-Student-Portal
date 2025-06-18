// src/pages/CourseRegistration.jsx
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    TextField,
    Button,
    MenuItem,
    Select,
    InputLabel,
    FormControl,
} from "@mui/material";
import { useRegistration } from "../contexts/RegistrationContext";

const courses = [
    { id: 1, name: "React" },
    { id: 2, name: "CSS" },
    { id: 3, name: "Javascript" },
];

export default function CourseRegistration() {
    const { id } = useParams();
    const { registerStudent } = useRegistration();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        courseId: parseInt(id) || "", // förifyll om id finns
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        registerStudent(form);
        navigate("/courses"); // tillbaks till kurssidan
    };

    return (
        <div className="container mt-4">
            <h2>Register for a Course</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    margin="normal"
                    required
                />
                <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    margin="normal"
                    required
                />
                <FormControl fullWidth margin="normal" required>
                    <InputLabel id="course-select-label">
                        Select Course
                    </InputLabel>
                    <Select
                        labelId="course-select-label"
                        name="courseId"
                        value={form.courseId}
                        label="Select Course"
                        onChange={handleChange}>
                        {courses.map((course) => (
                            <MenuItem key={course.id} value={course.id}>
                                {course.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Button type="submit" variant="contained" color="primary">
                    Register
                </Button>
            </form>
        </div>
    );
}
