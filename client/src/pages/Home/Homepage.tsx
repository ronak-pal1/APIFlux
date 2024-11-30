import { useNavigate } from "react-router-dom";
import dashboardImage from "../../assets/dashboard.png";
import statisticsImage from "../../assets/statistics-image.png";
import healthMonitorImage from "../../assets/health-monitor-image.png";
import Footer from "../../components/Footer";
import TextAnimation from "../../components/TextAnimation";
import { useEffect } from "react";

const Homepage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (
      localStorage.getItem("accessToken") &&
      localStorage.getItem("refreshToken")
    )
      navigate("/dashboard/schedule");
  }, []);

  return (
    <div>
      {/* Hero section */}
      <div className="w-full flex justify-center h-screen items-center bg-gradient-to-b from-black from-20% to-[#583df049] to-80%">
        <div className="flex flex-col items-center">
          <div className="text-center  flex flex-col items-center space-y-8">
            {/* <div className="h-32 w-fit text-center overflow-hidden">
              <h1 className=" text-8xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                Schedule
              </h1>
            </div   > */}
            <TextAnimation />
            <h2 className="text-primary-b text-6xl font-bold">API</h2>
            <p className="text-white text-xl font-light">
              Schedule, Monitor your API with our seamless dashboard and
              scheduling
            </p>
          </div>

          <button
            onClick={() => navigate("/dashboard/schedule")}
            className="bg-primary-b mt-10 px-8 py-2 text-xl text-slate-300 rounded-md font-medium"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Dashboard image */}
      <div className="w-full my-24 flex flex-col items-center">
        <h2 className="text-white text-5xl font-semibold">
          Easy to use Dashboard
        </h2>

        <div className="w-3/4 h-[500px] mt-16">
          <img
            src={dashboardImage}
            alt="dashboard Image"
            className="w-full h-full object-contain shadow-custom"
          />
        </div>
      </div>

      {/* Monitoring section */}
      <div className="w-full flex flex-1 px-20 my-60 items-center">
        <div className="flex-[0.4]">
          <h2 className="text-primary-g text-5xl font-semibold leading-normal">
            Monitor API Health Periodicially
          </h2>
        </div>

        <div className="flex-[0.6] flex justify-end">
          <img
            src={healthMonitorImage}
            alt="calender image"
            className="w-1/2 object-contain "
          />
        </div>
      </div>

      {/* Statistics section */}
      <div className="w-full flex flex-1 px-20 my-44 mt-60 items-center">
        <div className="flex-[0.7] flex justify-start w-full">
          <img
            src={statisticsImage}
            alt="statistics image"
            className="w-3/4 object-contain"
          />
        </div>

        <div className="flex-[0.3]">
          <h2 className="text-orange-300 text-5xl font-semibold leading-normal">
            See the overall statistics on the dashboard
          </h2>
        </div>
      </div>

      <div className="w-full flex justify-center my-20">
        <button
          onClick={() => navigate("/dashboard/schedule")}
          className="bg-primary-b mt-10 px-8 py-2 text-xl text-slate-300 rounded-md font-medium"
        >
          Get Started
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
