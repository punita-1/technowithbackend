//  {/* // Add more CardGroup components as needed */}
//  {showPopup && (
//     <div className="popup animate__animated animate__zoomIn animate__faster">
//       <div className="popup-content">
//         <h5>{selectedEvent.title}</h5>
//         <div className="popup-text mb-3">
//           <pre>{selectedEvent.description}</pre>
//         </div>
//         <NavLink
//           className="btn btn-primary me-2 text-light btn-lg"
//           to={"/registerform/" + selectedEvent.id}>
//           Register Now
//         </NavLink>

//         <button className="btn btn-secondary btn-lg" onClick={() => setShowPopup(false)}>
//           Close
//         </button>
//       </div>
//     </div>
//   )}
// Register.jsx

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './register.css';

const Register = () => {
    const { eventId } = useParams(); // Get eventId from URL
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        phone: "",
    });

    useEffect(() => {
        console.log("Selected Event ID:", eventId); // Use the eventId for any custom logic
    }, [eventId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        setShowForm(false);
    };

    return (
        <div className="register-container">
            <h1>Register for Event {eventId}</h1>
            <button className="register-btn" onClick={() => setShowForm(true)}>
                Register Now
            </button>

            {showForm && (
                <div className="register-form-container">
                    <h2>Register</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone:</label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button type="submit">Submit</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Register;  // This is the default export
