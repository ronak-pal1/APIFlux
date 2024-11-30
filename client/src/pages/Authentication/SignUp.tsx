import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const signup = async (e: any) => {
    e.preventDefault();

    const url = import.meta.env.VITE_BACKEND_URL + "/signup";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (response.status == 200) navigate("/signin");
  };
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-white text-3xl font-medium">Sign Up</h1>
      <div className="bg-light-dark px-7 py-7 w-[400px] mt-6 rounded-lg">
        <form className="space-y-4">
          <div className="flex flex-col space-y-2">
            <label className="text-white font-medium">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Full name"
              className="px-3 py-1 bg-black text-white"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-white font-medium">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="example@gmail.com"
              className="px-3 py-1 bg-black text-white"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-white font-medium">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="******"
              className="px-3 py-1 bg-black text-white"
            />
          </div>

          <div className="w-full flex justify-center">
            <button
              onClick={signup}
              className="bg-primary-b px-8 py-1 text-sm text-slate-300 rounded-md font-medium"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>

      <p className="text-slate-400 mt-4">
        Already have a account?{" "}
        <span
          className="text-blue-400 cursor-pointer"
          onClick={() => navigate("/signin")}
        >
          Sign in
        </span>
      </p>
    </div>
  );
};

export default SignUp;
