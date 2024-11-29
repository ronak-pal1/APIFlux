import { BarChart } from "@mui/x-charts";

const StatisticsPage = () => {
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
              <th>Time Period</th>
              <th>API Health</th>
              <th>Total Requests</th>
              <th style={{ borderRightWidth: "0px" }}>Hit</th>
            </tr>
          </thead>

          <tbody>
            <tr className="text-slate-300 text-center [&>td]:py-4 [&>td]:border-x-[0.1px] [&>td]:border-x-slate-700">
              <td style={{ borderLeftWidth: "0px" }}>https://example.com</td>
              <td>1m</td>
              <td className="flex justify-center">
                <div className="flex items-center space-x-3">
                  <p>99%</p>
                  <div className="w-6 h-1 bg-green-500"></div>
                </div>
              </td>
              <td>100</td>
              <td style={{ borderRightWidth: "0px" }}>99</td>
            </tr>
            <tr className="text-slate-300 text-center [&>td]:py-4 [&>td]:border-x-[0.1px] [&>td]:border-x-slate-700">
              <td style={{ borderLeftWidth: "0px" }}>https://example.com</td>
              <td>1m</td>
              <td className="flex justify-center">
                <div className="flex items-center space-x-3">
                  <p>99%</p>
                  <div className="w-6 h-1 bg-red-700"></div>
                </div>
              </td>
              <td>100</td>
              <td style={{ borderRightWidth: "0px" }}>99</td>
            </tr>

            <tr className="text-slate-300 text-center [&>td]:py-4 [&>td]:border-x-[0.1px] [&>td]:border-x-slate-700">
              <td style={{ borderLeftWidth: "0px" }}>https://example.com</td>
              <td>1m</td>
              <td className="flex justify-center">
                <div className="flex items-center space-x-3">
                  <p>99%</p>
                  <div className="w-6 h-1 bg-red-700"></div>
                </div>
              </td>
              <td>100</td>
              <td style={{ borderRightWidth: "0px" }}>99</td>
            </tr>

            <tr className="text-slate-300 text-center [&>td]:py-4 [&>td]:border-x-[0.1px] [&>td]:border-x-slate-700">
              <td style={{ borderLeftWidth: "0px" }}>https://example.com</td>
              <td>1m</td>
              <td className="flex justify-center">
                <div className="flex items-center space-x-3">
                  <p>99%</p>
                  <div className="w-6 h-1 bg-red-700"></div>
                </div>
              </td>
              <td>100</td>
              <td style={{ borderRightWidth: "0px" }}>99</td>
            </tr>

            <tr className="text-slate-300 text-center [&>td]:py-4 [&>td]:border-x-[0.1px] [&>td]:border-x-slate-700">
              <td style={{ borderLeftWidth: "0px" }}>https://example.com</td>
              <td>1m</td>
              <td className="flex justify-center">
                <div className="flex items-center space-x-3">
                  <p>99%</p>
                  <div className="w-6 h-1 bg-red-700"></div>
                </div>
              </td>
              <td>100</td>
              <td style={{ borderRightWidth: "0px" }}>99</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StatisticsPage;
