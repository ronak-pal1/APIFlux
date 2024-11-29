import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "./pages/Home/Homepage";
import DashboardLayout from "./pages/Dashboard/DashboardLayout";
import SchedulePage from "./pages/Dashboard/Schedule/SchedulePage";
import StatisticsPage from "./pages/Dashboard/Statistics/StatisticsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />

          <Route path="dashboard/" element={<DashboardLayout />}>
            <Route path="schedule/" element={<SchedulePage />} />
            <Route path="statistics/" element={<StatisticsPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
