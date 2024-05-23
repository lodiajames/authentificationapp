import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Notiflix from "notiflix";

const Login = () => {
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

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://authentication-st0h.onrender.com/login",
        {
          username,
          password,
        }
      );
      const token = response.data.token;
      Notiflix.Notify.success("You are now login!");
      setUsername("");
      setPassword("");
      fetchUsers();
      navigate("/account");
      //   window.location.reload();
      localStorage.setItem("token", token);
    } catch (error) {
      Notiflix.Notify.success("Sorry we can log you in check your credentials");
      console.log("login error");
    }
  };
  return (
    <div className="w-full h-screen flex">
      <div className="w-[50%] h-[100%] bg-[#4F4789] text-white flex justify-center items-center">
        <form
          onSubmit={handleLogin}
          className="text-center border rounded-lg w-[600px] h-[400px] p-9"
        >
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
            Login
          </button>
        </form>
      </div>
      <div className="w-[50%] h=[100%] flex justify-center items-center bg-green-50">
        <h2 className="text-3xl text-blue-600">LOGIN</h2>
      </div>
    </div>
  );
};

export default Login;
