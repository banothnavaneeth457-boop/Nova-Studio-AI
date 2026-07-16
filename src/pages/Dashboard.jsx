import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import StatsCards from "../components/dashboard/StatsCards";
import RecentProjects from "../components/dashboard/RecentProjects";
import QuickActions from "../components/dashboard/QuickActions";

function Dashboard() {
  return (
    <div className="flex bg-black text-white min-h-screen">
      <Sidebar />

      <main className="flex-1 p-8">
        <Topbar />
        <StatsCards />
        <RecentProjects />
        <QuickActions />
      </main>
    </div>
  );
}

export default Dashboard;