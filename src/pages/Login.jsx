import { Link } from "react-router-dom";

export default function Login() {
  return (
    <section className="auth-page">
      <div className="auth-card">

        <h1>Welcome Back 👋</h1>
        <p>Login to continue exploring amazing events.</p>

        <form>

          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <button className="auth-btn">
            Login
          </button>

        </form>

        <span>
          Don't have an account?
          <Link to="/register"> Register</Link>
        </span>

      </div>
    </section>
  );
}