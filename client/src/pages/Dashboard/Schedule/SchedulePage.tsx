import { Edit } from "@mui/icons-material";
import { useEffect, useState } from "react";

enum REQUEST_TYPE {
  "GET" = "GET",
  "POST" = "POST",
  "PUT" = "PUT",
}

const requestColor = (type: REQUEST_TYPE) => {
  if (type == REQUEST_TYPE.GET) return "#ADEBAD";
  else if (type == REQUEST_TYPE.POST) return "#ADD8E6";
  else if (type == REQUEST_TYPE.PUT) return "#F0C16B";
  else return "";
};

const ScheduleCard = ({
  endpoint,
  requestType,
}: {
  endpoint: string;
  requestType: REQUEST_TYPE;
}) => {
  const [requestC, setRequestC] = useState<string>("#ADEBAD");

  useEffect(() => {
    setRequestC(requestColor(requestType));
  }, [requestType]);
  return (
    <div className="w-full bg-light-dark px-7 py-5 rounded-md">
      <div className="flex items-center justify-between">
        <div
          className={` w-fit text-sm px-3 py-1 rounded-md text-black`}
          style={{ backgroundColor: requestC }}
        >
          {requestType} Endpoint
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex items-center space-x-3">
          <h2 className="text-slate-300 text-lg font-medium">Endpoint :</h2>
          <input
            type="text"
            value={endpoint}
            onChange={() => {}}
            className="bg-transparent w-[250px] outline-none text-slate-400"
          />
          <Edit className="text-slate-300" fontSize="small" />
        </div>

        {/* <div className="flex items-center space-x-3">
          <h2 className="text-slate-300 text-lg font-medium">Time Period :</h2>
          <input
            type="text"
            value={timePeriod}
            onChange={() => {}}
            className="bg-transparent w-[80px] outline-none text-slate-400"
          />
          <Edit className="text-slate-300" fontSize="small" />
        </div> */}
      </div>

      <div className="w-full mt-3 flex justify-end">
        <button className="bg-red-500 px-7 py-1 text-white rounded-md">
          Delete
        </button>
      </div>
    </div>
  );
};

interface ScheduleInfo {
  endpoint: string;
  requestType: REQUEST_TYPE;
}

const SchedulePage = () => {
  const [scheduledAPIs, setScheduledAPIs] = useState<ScheduleInfo[]>([]);

  const [endpoint, setEndpoint] = useState<string>("");
  const [requestType, setRequestType] = useState<string>("GET");

  const scheduleAPI = async () => {
    if (!endpoint) return;

    const userId = localStorage.getItem("userId");

    const url = import.meta.env.VITE_BACKEND_URL + `/add-schedule`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        userId,
        apiSchedule: {
          endpoint,
          requestType,
        },
      }),
    });

    if (response.status === 200) {
      setScheduledAPIs([
        {
          endpoint,
          requestType: requestType as REQUEST_TYPE,
        },
        ...scheduledAPIs,
      ]);

      setEndpoint("");
    }
  };

  const getSchedules = async () => {
    const userId = localStorage.getItem("userId");

    const url = import.meta.env.VITE_BACKEND_URL + `/schedules?id=${userId}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });

    if (response.status === 200) {
      const data = await response.json();

      setScheduledAPIs(data.apiSchedules);
    }
  };

  useEffect(() => {
    getSchedules();
  }, []);

  return (
    <div className="w-full h-full overflow-y-scroll no-scrollbar">
      <h1 className="text-white text-4xl font-medium">Schedule API</h1>

      <div className="mt-10">
        <div className="w-full flex flex-1 items-center  space-x-3">
          <select
            className="py-3 px-3 bg-light-dark text-slate-300 rounded-md"
            defaultValue={requestType}
            onChange={(e) => setRequestType(e.target.value)}
          >
            <option value={"GET"}>GET</option>
            <option value={"POST"}>POST</option>
            <option value={"PUT"}>PUT</option>
          </select>

          <input
            type="text"
            value={endpoint}
            onChange={(e) => setEndpoint(e.target.value)}
            placeholder="https://example.com/api/v1/xyz"
            className="bg-light-dark px-7 py-3  w-full rounded-md outline-none text-slate-300"
          />

          <button
            onClick={scheduleAPI}
            className="bg-primary-b px-8 py-2 text-lg text-slate-300 rounded-md"
          >
            Schedule
          </button>
        </div>

        {/* <div className="flex items-center mt-7 space-x-3">
          <h2 className="text-slate-300 text-lg font-medium">Time Period :</h2>
          <input
            type="text"
            value={timePeriod}
            onChange={(e) => setTimePeriod(e.target.value)}
            placeholder="1m/1d/1w/1M"
            className="bg-light-dark px-7 py-3  w-32 rounded-md outline-none text-slate-300"
          />
        </div> */}
      </div>

      {/* info */}
      <div className="w-full text-center">
        <p className="text-slate-500 text-xs mt-5">
          ** Fill the above fields and schedule your API **
        </p>
      </div>

      {/* scheduled api cards */}
      <div className="w-full mt-7 h-full space-y-7">
        {scheduledAPIs.map((api, key) => (
          <ScheduleCard
            key={key}
            endpoint={api.endpoint}
            requestType={api.requestType}
          />
        ))}
      </div>
    </div>
  );
};

export default SchedulePage;
