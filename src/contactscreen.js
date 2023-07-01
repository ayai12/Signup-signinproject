import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function SignupScreen() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Validate form fields
      if (!formData.username || !formData.email || !formData.password) {
        toast.error("Please fill in all required fields.", {
          className: "toast-error",
        });
        return;
      }

      const response = await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // User signed up successfully
        setFormData({
          username: "",
          email: "",
          password: "",
        });

        toast.success("Account created successfully!", {
          onClose: () => navigate("/"),
          className: "toast-success",
        });
      } else {
        const data = await response.json();
        if (response.status === 400) {
          // Account already exists
          toast.error(data.error, {
            className: "toast-error",
          });
        } else {
          // Other error response
          console.error("Signup error:", data.error);
        }
      }
    } catch (error) {
      console.error("Signup error:", error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="Signup">
      <h2>Sign up</h2>
      <ToastContainer />
      <form className="Signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <p>contact email: makeshiftemail@gmail.com</p>
      <p>
        Already have an account? <Link to="/signin">Sign in</Link>
      </p>
    </div>
  );
}

export default SignupScreen;
