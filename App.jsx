
import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import LabViewer from "./components/LabViewer";

export default function App() {
  const [lab, setLab] = useState(null);
  return (
    <>
      <Header />
      <div className="layout">
        <Sidebar setLab={setLab} />
        <LabViewer lab={lab} />
      </div>
    </>
  );
}
