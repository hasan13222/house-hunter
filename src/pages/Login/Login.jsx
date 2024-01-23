import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const { axiosSecure } = useAxiosSecure();
  const {setUser} = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.user_email.value;
    const password = e.target.user_password.value;

    axiosSecure.post("/login", { email, password }).then((res) => {
      if (res.data?.success === true) {
        setLoginError("");
        setUser(res.data)
        navigate("/");
      } else {
        setUser(null);
        setLoginError(res.data.message);
      }
    });
  };
  return (
    <>
      <div className="full_container login_full">
        <div className="fix_container container mx-auto login">
          <h2 className="font-bold text-3xl">User Login</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" required name="user_email" placeholder="Email" />
            <input
              required
              type="password"
              name="user_password"
              placeholder="PassWord"
            />
            <p
              style={loginError ? { display: "block" } : { display: "none" }}
              className="warning"
            >
              {loginError}
            </p>
            <input
              className="bg-yellow-700 text-white"
              type="submit"
              value="Login"
            />
          </form>
          <p>
            Didn&apos;t Signed Up? Go to{" "}
            <Link
              className="btn btn-warning"
              style={{
                textDecoration: "underline",
                fontSize: "20px",
                color: "#1b71ac",
                fontWeight: "bold",
              }}
              to={"/signup"}
            >
              SignUp
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
