import React, { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router";
import useAxios from "../../hooks/useAxios";
 const LoginPage = () => {
  const nav = useNavigate();
  const { setUser } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { sendRequest, error, loading, status } = useAxios();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { token, user } = await sendRequest({
        url: "/auth/login",
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "application/json",
        },
      });

      localStorage.setItem("token", token);
      setUser(user);
      nav("/");
    } catch {}
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 py-12 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            {loading ? " Loading..." : " Login"}
          </button>
          {error && <p className="text-red-500">{error} </p>}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
