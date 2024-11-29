import dashboardImage from "../../assets/dashboard.png";
import Footer from "../../components/Footer";

const Homepage = () => {
  return (
    <div>
      {/* Hero section */}
      <div className="w-full flex justify-center h-screen items-center bg-gradient-to-b from-black from-20% to-[#583df049] to-80%">
        <div className="flex flex-col items-center">
          <div className="text-center space-y-8">
            <h1 className=" text-8xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              Schedule
            </h1>

            <h2 className="text-primary-b text-6xl">API</h2>
          </div>

          <button className="bg-primary-b mt-10 px-8 py-2 text-xl text-slate-300 rounded-md font-medium">
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

      {/* Monitoring image */}
      <div className="w-full flex flex-1 px-20 my-44 items-center">
        <div className="flex-[0.3]">
          <h2 className="text-primary-g text-5xl font-semibold leading-normal">
            Monitor API Health Periodicially
          </h2>
        </div>

        <div className="flex-[0.7] flex justify-center"></div>
      </div>

      <div className="w-full flex justify-center my-20">
        <button className="bg-primary-b mt-10 px-8 py-2 text-xl text-slate-300 rounded-md font-medium">
          Get Started
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
