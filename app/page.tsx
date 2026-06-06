"use client";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import CRM from "./components/CRM";
import Projects from "./components/Projects";
import AIAgents from "./components/AIAgents";
import Portal from "./components/Portal";
import { Proposals } from "./components/Proposals";
import Financials from "./components/Financials";
import { MediaGallery, Vendors, Reports, Templates, Directory } from "./components/Modules";

export default function Home() {
  const [activeModule, setActiveModule] = useState("dashboard");

  const renderModule = () => {
    switch (activeModule) {
      case "dashboard": return <Dashboard />;
      case "crm": return <CRM />;
      case "projects": return <Projects />;
      case "ai-agents": return <AIAgents />;
      case "portal": return <Portal />;
      case "proposals": return <Proposals />;
      case "financials": return <Financials />;
      case "media": return <MediaGallery />;
      case "vendors": return <Vendors />;
      case "reports": return <Reports />;
      case "templates": return <Templates />;
      case "directory": return <Directory />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[#0A0A0A]">
      <Sidebar active={activeModule} onSelect={setActiveModule} />
      <main className="flex-1 overflow-y-auto">
        {renderModule()}
      </main>
    </div>
  );
}
