import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full h-fit py-20 bg-[#0B0A0A] px-10">
      <div className="h-full flex flex-1 justify-between">
        <div className="h-full flex flex-[0.3] items-center">
          <div className="space-y-3">
            <h1 className="text-white text-3xl font-semibold">
              HackFrost Hackathon
            </h1>
            <h3 className="text-white text-xl font-extralight">
              Made by Ronak Paul
            </h3>
          </div>
        </div>

        <div className="h-full flex flex-[0.6] justify-evenly">
          <div>
            <h1 className="text-white font-semibold text-xl mb-3">Resources</h1>

            <div className="text-slate-300 text-sm flex flex-col space-y-2 font-light">
              <Link to={"https://www.youtube.com/@CodaGo"} target="_blank">
                Schedule API
              </Link>
              <Link to={"https://github.com/ronak-pal1"} target="_blank">
                Statistics
              </Link>
            </div>
          </div>
          <div>
            <h1 className="text-white font-semibold text-xl mb-3">Socials</h1>

            <div className="text-slate-300 text-sm flex flex-col space-y-2 font-light">
              <Link to={"https://twitter.com/ronak_pal1"} target="_blank">
                Twitter
              </Link>
              <Link
                to={"https://www.linkedin.com/in/ronak-pal1/"}
                target="_blank"
              >
                LinkedIn
              </Link>
              <Link to={"https://instagram.com/ronak_pal1"} target="_blank">
                Instagram
              </Link>
            </div>
          </div>

          <div>
            <h1 className="text-white font-semibold text-xl mb-3">Others</h1>

            <div className="text-slate-300 text-sm flex flex-col space-y-2 font-light">
              <Link to={"https://www.youtube.com/@CodaGo"} target="_blank">
                Youtube
              </Link>
              <Link to={"https://github.com/ronak-pal1"} target="_blank">
                GitHub
              </Link>
              <Link to={"https://www.ronakpaul.com"} target="_blank">
                Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
