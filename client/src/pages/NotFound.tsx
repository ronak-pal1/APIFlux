import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-slate-300 font-bold text-5xl">404 Not Found</h1>

        <button
          onClick={() => navigate("/")}
          className="bg-primary-b mt-10 px-8 py-2 text-xl text-slate-300 rounded-md font-medium"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
