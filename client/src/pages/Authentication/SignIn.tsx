import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// SignIn component
const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // Checking is the user is already logged in
  useEffect(() => {
    if (
      localStorage.getItem("accessToken") &&
      localStorage.getItem("refreshToken")
    )
      navigate("/dashboard/schedule");
  }, []);

  const signin = async (e: any) => {
    e.preventDefault();

    const response = await fetch("https://apiflux.ronakpaul.com" + "/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    localStorage.setItem("accessToken", data.accessToken);
    localStorage.setItem("refreshToken", data.refreshToken);
    localStorage.setItem("userId", data.userId);

    if (response.status == 200) navigate("/dashboard/schedule");
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-white text-3xl font-medium">Sign In</h1>
      <div className="bg-light-dark px-7 py-7 w-[400px] mt-6 rounded-lg">
        <form className="space-y-4">
          <div className="flex flex-col space-y-2">
            <label className="text-white font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              onClick={signin}
              className="bg-primary-b px-8 py-1 text-sm text-slate-300 rounded-md font-medium"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>

      <p className="text-slate-400 mt-4">
        Don't have a account?{" "}
        <span
          className="text-blue-400 cursor-pointer"
          onClick={() => navigate("/signup")}
        >
          Sign up now
        </span>
      </p>
    </div>
  );
};

export default SignIn;
