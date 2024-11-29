import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-white text-3xl font-medium">Sign Up</h1>
      <div className="bg-light-dark px-7 py-7 w-[400px] mt-6 rounded-lg">
        <form className="space-y-4">
          <div className="flex flex-col space-y-2">
            <label className="text-white font-medium">Name</label>
            <input
              type="Name"
              placeholder="Full name"
              className="px-3 py-1 bg-black text-white"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-white font-medium">Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="px-3 py-1 bg-black text-white"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-white font-medium">Password</label>
            <input
              type="password"
              placeholder="******"
              className="px-3 py-1 bg-black text-white"
            />
          </div>

          <div className="w-full flex justify-center">
            <button className="bg-primary-b px-8 py-1 text-sm text-slate-300 rounded-md font-medium">
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
