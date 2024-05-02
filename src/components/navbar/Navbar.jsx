import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import Form from "../../components/form/Form";

function Navbar() {
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleLogin = () => {
    setUser(true);
    setShowForm(false);
  };

  return (
    <>
      <nav>
        <div className="left">
          <Link to="/" className="logo">
            <img src="/logo.png" alt="" />
            <span>LamaEstate</span>
          </Link>
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
          <Link to="/">Agents</Link>
        </div>

        <div className="right">
          {user ? (
            <div className="user">
              <div className="details">
                <img
                  src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                />
                <span>John Doe</span>
              </div>
              <Link to="/profile" className="profile">
                <div className="notifications">6+</div>
                <span>Profile</span>
              </Link>
            </div>
          ) : (
            <>
              <Link
                to="#"
                onClick={() => {
                  setShowForm(true);
                }}
              >
                Sign in
              </Link>
              <Link to="/" className="signUp">
                Sign up
              </Link>{" "}
            </>
          )}

          <div className="menuIcons">
            <img
              src={open ? "/close.png" : "/menu.png"}
              alt=""
              onClick={() => setOpen((prev) => !prev)}
            />
          </div>
          <div className={open ? "menu active" : "menu"}>
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Contact</Link>
            <Link to="/">Agents</Link>
            <Link
              to="#"
              onClick={() => {
                setShowForm(true);
              }}
            >
              Sign in
            </Link>
            <Link to="/">Sign up</Link>{" "}
          </div>
        </div>
      </nav>

      {showForm && (
        <Form setUser={setUser} onClose={() => setShowForm(false)} />
      )}
    </>
  );
}

export default Navbar;
