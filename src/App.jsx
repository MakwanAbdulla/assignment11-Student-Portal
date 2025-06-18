import { useState } from "react";
import React from "react";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    BrowserRouter,
} from "react-router-dom";
import "./App.css";
import Courses from "./pages/Courses";
import News from "./pages/News";
import Home from "./pages/Home";
import CourseDetails from "./components/CourseDetails";
import CourseRegistration from "./pages/CourseRegistration";
import MyCourses from "./pages/MyCourses";

function App() {
    return (
        <>
            <div className="nav">
                <Navbar />
            </div>

            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/home" element={<Home />} />
                <Route path="/Courses" element={<Courses />}></Route>
                <Route path="/courses/:id" element={<CourseDetails />} />
                <Route
                    path="/courses/:id/register"
                    element={<CourseRegistration />}
                />
                <Route path="/my-courses" element={<MyCourses />} />
                <Route path="/News" element={<News />}></Route>
            </Routes>
        </>
    );
}

export default App;
