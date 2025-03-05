import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const LoginForm = () => {
  const navigate = useNavigate();
  const routeChangeMemberHomepage= () => {
       let path = '/memberhomepage';
       navigate(path);
  }
  const [formData, setFormData] = useState({
    identity: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/auth/login", formData);
      localStorage.setItem("token", response.data.token);
      setMessage("Login successful");
      routeChangeMemberHomepage('/memberhomepage'); // เปลี่ยนเส้นทางไปหน้า Dashboard หรือหน้าหลักหลังล็อกอิน
    } catch (error) {
      setMessage(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-10">Login</h2>
      {message && <p className={`mb-4 ${message.includes("successful") ? "text-green-500" : "text-red-500"}`}>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="identity"
          placeholder="Identity (Email or Username)"
          value={formData.identity}
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded-full"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded-full"
          required
        />
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded-full hover:bg-orange-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;