import { Link } from "react-router-dom";

export default function Register() {
  return (
    <section className="auth-page">

      <div className="auth-card">

        <h1>Create Account 🚀</h1>

        <p>Join EventHub and start discovering events.</p>

        <form>

          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="john@gmail.com"
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="********"
            />
          </div>

          <button className="auth-btn">
            Create Account
          </button>

        </form>

        <span>
          Already have an account?
          <Link to="/login"> Login</Link>
        </span>

      </div>

    </section>
  );
}