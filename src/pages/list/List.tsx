import { Navbar } from "../../components/navbar/Navbar";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Database } from "../../components/database/Database";

import "./list.scss";

export function List() {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Database />
      </div>
    </div>
  );
}
