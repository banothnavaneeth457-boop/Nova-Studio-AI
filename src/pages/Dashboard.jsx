import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import StatsCards from "../components/dashboard/StatsCards";
import RecentProjects from "../components/dashboard/RecentProjects";

function Dashboard() {
  return (
    <div className="flex bg-black text-white min-h-screen">
      <Sidebar />

      <main className="flex-1 p-8">
        <Topbar />
        <StatsCards />
        <RecentProjects />
      </main>
    </div>
  );
}

export default Dashboard;