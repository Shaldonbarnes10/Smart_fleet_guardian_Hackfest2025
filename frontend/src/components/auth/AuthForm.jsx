import { useState } from "react";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLogin && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const payload = isLogin
      ? { email: formData.email, password: formData.password }
      : {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
        };

    const endpoint = isLogin ? "/api/auth/login" : "/api/auth/signup";

    try {
      const response = await fetch(import.meta.env.VITE_BACKEND_URL + endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        alert(isLogin ? "Login successful!" : "Signup successful!");
      } else {
        alert(result.message || "Something went wrong");
      }
    } catch (error) {
      alert("Error connecting to server");
      console.error(error);
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full">
      <h2 className="text-2xl font-bold text-yellow-600 mb-6">
        {isLogin ? "Login to your account" : "Create a new account"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {!isLogin && (
          <>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-xl focus:outline-yellow-500"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-xl focus:outline-yellow-500"
              required
            />
          </>
        )}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-xl focus:outline-yellow-500"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-xl focus:outline-yellow-500"
          required
        />
        {!isLogin && (
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-xl focus:outline-yellow-500"
            required
          />
        )}
        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-xl transition"
        >
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>
      <p className="mt-4 text-center text-sm text-gray-600">
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <span
          onClick={toggleForm}
          className="ml-2 text-yellow-600 hover:underline cursor-pointer"
        >
          {isLogin ? "Sign Up" : "Login"}
        </span>
      </p>
    </div>
  );
};

export default AuthForm;
