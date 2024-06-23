import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="container-fluid">
      {/* header */}
      <div>
        <nav
          class="navbar navbar-expand-sm fixed-top justify-content-center "
          style={{ backgroundColor: "white" }}
        >
          <div>
            <Link
              className="navbar-brand"
              to="/"
              style={{ color: "orange", marginTop: "20px" }}
            >
              <h2>Food Heaven</h2>
            </Link>
          </div>
          <div className="nav" style={{ marginLeft: "400px" }}>
            <div style={{ marginLeft: "10px" }}>
              <Link className="nav-link" to="/menu">
                Menu
              </Link>
            </div>

            <div style={{ marginLeft: "10px" }}>
              <Link className="nav-link" to="/cart">
                Cart
              </Link>
            </div>

            <div style={{ marginLeft: "10px" }}>
              <Link className="nav-link" to="/orders">
                Orders
              </Link>
            </div>

            <div style={{ marginLeft: "10px" }}>
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </div>

            <div style={{ marginLeft: "10px" }}>
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </div>
          </div>
        </nav>
      </div>

      <div>
        <img
          src="https://wikisavor.onrender.com/assets/hero-B2e6cpcv.png"
          alt="body img"
          style={{
            width: "100%",
            height: "1000px",
            marginTop: "100px",
            position: "absolute",
            left: "0px",
            right: "0px",
          }}
        />
      </div>
    </div>
  );
}

export default Home;
