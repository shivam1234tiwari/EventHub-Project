import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(form);

    alert("Registration Successful!");

    navigate("/login");

  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        <h1>Create Account</h1>

        <p>Join EventHub today.</p>

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <label>Full Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <button className="auth-btn" type="submit">
            Create Account
          </button>

        </form>

        <span>
          Already have an account?
          <Link to="/login"> Login</Link>
        </span>

      </div>

    </div>
  );
}