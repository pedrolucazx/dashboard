import { Sidebar } from "../../components/sidebar/Sidebar";
import { Navbar } from "../../components/navbar/Navbar";
import { Widgets } from "../../components/widgets/Widgets";
import { Featured } from "../../components/featured/Featured";
import { Chart } from "../../components/chart/Chart";

import "./home.scss";
import { TableList } from "../../components/table/Table";

export function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widgets type="user" />
          <Widgets type="order" />
          <Widgets type="earning" />
          <Widgets type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart aspect={2 / 1} title="Últimos 6 meses (rendimentos)" />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <TableList />
        </div>
      </div>
    </div>
  );
}
