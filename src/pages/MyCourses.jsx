import { useRegistration } from "../contexts/RegistrationContext";
import "../styles/MyCourses.css";
export default function MyCourses() {
    const { registrations } = useRegistration();
    return (
        <div>
            <h2>Registered Courses</h2>
            {registrations.length === 0 ? (
                <h3>No courses yet</h3>
            ) : (
                <div className="reg-courses">
                    {registrations.map((reg, index) => (
                        <div className="reg-courses">
                            <h2>Name: {reg.name}</h2> <h2>Email:{reg.email}</h2>
                            <h2>Course:</h2>
                            <h2>
                                {
                                    { 1: "React", 2: "CSS", 3: "Javascript" }[
                                        reg.courseId
                                    ]
                                }
                            </h2>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
