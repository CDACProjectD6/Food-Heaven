import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <h2 className="page-header">Login</h2>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="form">
            <div className="mb-3">
              <label htmlFor="">Email</label>
              <input type="email" className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="">Password</label>
              <input type="password" className="form-control" />
            </div>
            <div className="mb-3">
              <div>
                Don't have account ? <Link to="/register">Register here</Link>
              </div>
              <button type="button" class="btn btn-success btn-lg mt-3">
                Login
              </button>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default Login;
