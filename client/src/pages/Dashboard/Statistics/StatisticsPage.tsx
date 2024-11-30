import { BarChart } from "@mui/x-charts";
import { useEffect, useState } from "react";

interface ScheduleInfo {
  endpoint: string;
  totalRequests: number;
  responseTime: number;
  hits: number;
}

const calAPIHealth = (hit: number, total: number): number => {
  if (total == 0) return 0;

  return Math.round((hit / total) * 100);
};

const StatisticsPage = () => {
  const [scheduledAPIs, setScheduledAPIs] = useState<ScheduleInfo[]>([]);

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
      <h1 className="text-white text-4xl font-medium">Statistics</h1>

      {/* Bar graph */}
      <div className="mt-10">
        <BarChart
          series={[
            { data: [51, 6, 49, 30] },
            { data: [15, 25, 30, 50] },
            { data: [60, 50, 15, 25] },
          ]}
          height={290}
          sx={{
            //change left yAxis label styles
            "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
              strokeWidth: "1",
              fill: "white",
            },
            // change all labels fontFamily shown on both xAxis and yAxis
            "& .MuiChartsAxis-tickContainer .MuiChartsAxis-tickLabel": {
              fontFamily: "Roboto",
            },
            // change bottom label styles
            "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
              strokeWidth: "1",
              fill: "white",
            },
            // bottomAxis Line Styles
            "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
              stroke: "white",
              strokeWidth: 1,
            },
            // leftAxis Line Styles
            "& .MuiChartsAxis-left .MuiChartsAxis-line": {
              stroke: "white",
              strokeWidth: 1,
            },
          }}
          xAxis={[
            {
              data: [
                "example.com",
                "exaple2.com",
                "example3.com",
                "example4.com",
              ],
              scaleType: "band",
            },
          ]}
          margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
          barLabel="value"
        ></BarChart>
      </div>

      {/* Stats table */}
      <div className="mt-10">
        <table className="bg-light-dark w-full h-full rounded-md">
          <thead>
            <tr className="text-white [&>th]:py-4 text-lg border-b-[0.1px] border-b-slate-700 [&>th]:border-x-[0.1px] [&>th]:border-x-slate-700 ">
              <th style={{ borderLeftWidth: "0px" }}>Endpoint</th>
              <th>API Health</th>
              <th>Response Time</th>
              <th>Total Requests</th>
              <th style={{ borderRightWidth: "0px" }}>Hit</th>
            </tr>
          </thead>

          <tbody>
            {scheduledAPIs.map((api, key) => (
              <tr
                key={key}
                className="text-slate-300 text-center [&>td]:py-4 [&>td]:border-x-[0.1px] [&>td]:border-x-slate-700"
              >
                <td style={{ borderLeftWidth: "0px" }}>{api.endpoint}</td>
                <td className="flex justify-center">
                  <div className="flex items-center space-x-3">
                    <p>{calAPIHealth(api.hits, api.totalRequests)}%</p>
                    <div
                      className={`w-6 h-1  ${
                        calAPIHealth(api.hits, api.totalRequests) >= 50
                          ? "bg-green-500"
                          : "bg-red-600"
                      }`}
                    ></div>
                  </div>
                </td>

                <td>{api.responseTime} ms</td>

                <td>{api.totalRequests}</td>
                <td style={{ borderRightWidth: "0px" }}>{api.hits}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StatisticsPage;
