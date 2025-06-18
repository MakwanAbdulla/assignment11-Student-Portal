// src/context/RegistrationContext.jsx
import { createContext, useContext, useState } from "react";

const RegistrationContext = createContext();

export function useRegistration() {
    return useContext(RegistrationContext);
}

export function RegistrationProvider({ children }) {
    const [registrations, setRegistrations] = useState([]);

    const registerStudent = (registration) => {
        setRegistrations((prev) => [...prev, registration]);
    };

    return (
        <RegistrationContext.Provider
            value={{ registrations, registerStudent }}>
            {children}
        </RegistrationContext.Provider>
    );
}
