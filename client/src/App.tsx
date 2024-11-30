import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Home/Homepage";
import DashboardLayout from "./pages/Dashboard/DashboardLayout";
import SchedulePage from "./pages/Dashboard/Schedule/SchedulePage";
import StatisticsPage from "./pages/Dashboard/Statistics/StatisticsPage";
import HomeLayout from "./pages/Home/HomeLayout";
import SignIn from "./pages/Authentication/SignIn";
import SignUp from "./pages/Authentication/SignUp";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Homepage />} />
          <Route path="signin/" element={<SignIn />} />
          <Route path="signup/" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="dashboard/" element={<DashboardLayout />}>
          <Route path="schedule/" element={<SchedulePage />} />
          <Route path="statistics/" element={<StatisticsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
