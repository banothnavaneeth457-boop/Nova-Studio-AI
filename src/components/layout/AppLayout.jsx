import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import RightPanel from "./RightPanel";

export default function AppLayout({ children }) {
  return (
    <div className="h-screen bg-[#09090B] flex">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Topbar />

        <main className="flex-1 overflow-auto p-8 text-white">
          {children}
        </main>

      </div>

      <RightPanel />

    </div>
  );
}