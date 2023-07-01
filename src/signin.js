import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SigninScreen() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Validate form fields
      if (!formData.email || !formData.username || !formData.password) {
        toast.error("Please fill in all required fields.", {
          className: "toast-error",
        });
        return;
      }

      const response = await fetch("http://localhost:5000/api/users/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // User signed in successfully
        setFormData({
          email: "",
          username: "",
          password: "",
        });

        toast.success("Signed in successfully!", {
          onClose: () => navigate("/"),
          className: "toast-success",
        });
      } else {
        const data = await response.json();
        if (response.status === 401) {
          // Invalid credentials
          toast.error(data.error, {
            className: "toast-error",
          });
        } else {
          // Other error response
          toast.error("Signin failed. Please try again later.", {
            className: "toast-error",
          });
          console.error("Signin error:", data.error);
        }
      }
    } catch (error) {
      toast.error("Signin failed. Please try again later.", {
        className: "toast-error",
      });
      console.error("Signin error:", error.message);
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
    <div className="Signin">
      <h2>Sign in</h2>
      <ToastContainer />
      <form className="Signin-form" onSubmit={handleSubmit}>
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
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        

        <button type="submit" className="btn">
          Sign in
        </button>
      </form>
      <p>contact email: makeshiftemail@gmail.com</p>
      <p>
        Don't have an account? <Link to="/contact">Sign up</Link>
      </p>
    </div>
  );
}

export default SigninScreen;
