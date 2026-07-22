import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.username ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Please fill all required fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!formData.agree) {
      alert("Please accept Terms & Conditions.");
      return;
    }

    console.log(formData);

    alert("Registration Successful (Frontend Only)");
  };

  return (
    <section className="auth-page">
      <div className="auth-container">

        <div className="auth-left">
          <h1>Join EventHub 🚀</h1>

          <p>
            Create your free account and discover, organize and manage amazing
            events.
          </p>

          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900"
            alt="register"
          />
        </div>

        <div className="auth-right">

          <div className="auth-card">

            <h2>Create Account</h2>

            <p className="subtitle">
              Start your EventHub journey today.
            </p>

            <form onSubmit={handleSubmit}>

              <div className="input-group">
                <label>Full Name</label>

                <input
                  type="text"
                  placeholder="Rahul Tiwari"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group">
                <label>Username</label>

                <input
                  type="text"
                  placeholder="rahul123"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group">
                <label>Email</label>

                <input
                  type="email"
                  placeholder="example@gmail.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group">
                <label>Phone Number</label>

                <input
                  type="tel"
                  placeholder="+91 9876543210"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group">

                <label>Password</label>

                <div className="password-box">

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />

                  <button
                    type="button"
                    className="show-btn"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>

                </div>

              </div>

              <div className="input-group">

                <label>Confirm Password</label>

                <div className="password-box">

                  <input
                    type={showConfirm ? "text" : "password"}
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />

                  <button
                    type="button"
                    className="show-btn"
                    onClick={() => setShowConfirm(!showConfirm)}
                  >
                    {showConfirm ? "Hide" : "Show"}
                  </button>

                </div>

              </div>

              <div className="options">

                <label>

                  <input
                    type="checkbox"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                  />

                  I agree to the Terms & Conditions

                </label>

              </div>

              <button className="primary-btn">
                Create Account
              </button>

            </form>

            <div className="divider">
              <span>OR</span>
            </div>

            <button className="google-btn">
              Sign Up with Google
            </button>

            <p className="bottom-text">
              Already have an account?

              <Link to="/login">
                Login
              </Link>

            </p>

          </div>

        </div>

      </div>
    </section>
  );
}