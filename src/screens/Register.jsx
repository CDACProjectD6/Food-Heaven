import { Link } from "react-router-dom";

function Register() {
  return (
    <div>
      <h2 className="page-header">Register</h2>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="form">
            <div className="mb-3">
              <label htmlFor="">First Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="">Last Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="">Email</label>
              <input type="email" className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="">Address</label>
              <input type="address" className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="">Phone Number</label>
              <input type="number" className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="">Password</label>
              <input type="password" className="form-control" />
            </div>
            <div className="mb-3">
              <div>
                Already have an account ? <Link to="/login">Login here</Link>
              </div>
              <button type="button" class="btn btn-success btn-lg mt-3">
                Register
              </button>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default Register;
