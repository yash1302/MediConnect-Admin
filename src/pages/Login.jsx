import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { userContext } from "../context/UserContext";
import { adminLogin, doctorLogin } from "../utils/Api.utils";

const Login = () => {
  const [state, setState] = useState("Admin");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { setToken } = useContext(userContext);

  const handleLoginDoctor = async () => {
    try {
      const { data } = await doctorLogin(email, password);
      if (data) {
        setToken(data);
        localStorage.setItem("accessToken", data);
        navigate("/doctor-dashboard");
        window.location.reload();
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleAdminLogin = async () => {
    try {
      const { data } = await adminLogin(email, password);
      if (data) {
        setToken(data);
        localStorage.setItem("accessToken", data);
        navigate("/admin-dashboard");
        window.location.reload();
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (state === "Admin") {
      await handleAdminLogin();
    } else {
      await handleLoginDoctor();
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg">
        <p className="text-2xl font-semibold m-auto">
          <span className="text-primary">{state}</span> Login
        </p>
        <div className="w-full ">
          <p>Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="border border-[#DADADA] rounded w-full p-2 mt-1"
            type="email"
            required
          />
        </div>
        <div className="w-full ">
          <p>Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="border border-[#DADADA] rounded w-full p-2 mt-1"
            type="password"
            required
          />
        </div>
        <button className="bg-primary text-white w-full py-2 rounded-md text-base">
          Login
        </button>
        {state === "Admin" ? (
          <p>
            Doctor Login?{" "}
            <span
              onClick={() => setState("Doctor")}
              className="text-primary underline cursor-pointer"
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Admin Login?{" "}
            <span
              onClick={() => setState("Admin")}
              className="text-primary underline cursor-pointer"
            >
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
