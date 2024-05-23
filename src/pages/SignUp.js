import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Notiflix from "notiflix";
const SignUp = () => {
  // const [user, setUser] = useState([]);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get("https://authentication-st0h.onrender.com/").then((res) => {
      console.log(res.data);
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post("https://authentication-st0h.onrender.com/register", {
        email,
        username,
        password,
      })
      .then(() => {
        Notiflix.Notify.success("You successfully registered");
        setEmail("");
        setUsername("");
        setPassword("");
        fetchUsers();
        navigate("/login");
      })
      .catch((err) => {
        Notiflix.Notify.failure(
          "Unable to register, please check your credentials"
        );
        console.log("Unable to register user");
      });
  };

  return (
    <div className="w-full h-screen flex">
      <div className="w-[50%] h-[100%] bg-[#4F4789] text-white flex justify-center items-center">
        <form
          onSubmit={handleRegister}
          className="text-center border rounded-lg w-[600px] h-[400px] p-9"
        >
          {/* email input */}
          <label>Email</label>
          <br />
          <input
            className="w-[400px] h-[50px] rounded-xl bg-[#201335]/80 p-2"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          {/* Username Input */}
          <label>Username</label>
          <br />
          <input
            className="w-[400px] h-[50px] rounded-xl bg-[#201335]/80 p-2"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <br />
          <label>Password</label>
          <br />
          <input
            className="w-[400px] h-[50px] rounded-xl bg-[#201335]/80 p-2"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button
            className="w-[200px] h-[50px] border hover:bg-orange-600"
            type="submit"
          >
            Sign UP
          </button>
        </form>
      </div>
      <div className="w-[50%] h=[100%] flex justify-center items-center bg-green-50">
        <h2 className="text-3xl text-blue-600">SIGNUP</h2>
      </div>
    </div>
  );
};

export default SignUp;
