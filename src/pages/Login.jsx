import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Please fill all fields.");
      return;
    }

    console.log("Login Data:", formData);

    alert("Frontend Login Successful (Backend Coming Soon)");
  };

  return (
    <section className="auth-page">
      <div className="auth-container">

        <div className="auth-left">
          <h1>Welcome Back 👋</h1>

          <p>
            Login to your EventHub account and discover amazing events happening
            around you.
          </p>

          <img
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=900"
            alt="Event"
          />
        </div>

        <div className="auth-right">

          <div className="auth-card">

            <h2>Login</h2>

            <p className="subtitle">
              Enter your credentials to continue.
            </p>

            <form onSubmit={handleSubmit}>

              <div className="input-group">
                <label>Email</label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group">

                <label>Password</label>

                <div className="password-box">

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
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

              <div className="options">

                <label>

                  <input
                    type="checkbox"
                    name="remember"
                    checked={formData.remember}
                    onChange={handleChange}
                  />

                  Remember Me

                </label>

                <a href="#">Forgot Password?</a>

              </div>

              <button className="primary-btn">
                Login
              </button>

            </form>

            <div className="divider">
              <span>OR</span>
            </div>

            <button className="google-btn">
              Continue with Google
            </button>

            <p className="bottom-text">

              Don't have an account?

              <Link to="/register">
                Register
              </Link>

            </p>

          </div>

        </div>

      </div>
    </section>
  );
}