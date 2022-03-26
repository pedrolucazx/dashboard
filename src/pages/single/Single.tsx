import { Chart } from "../../components/chart/Chart";
import { Navbar } from "../../components/navbar/Navbar";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { TableList } from "../../components/table/Table";

import "./single.scss";

export function Single() {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Editar</div>
            <h1 className="title">Informações </h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/6031611/pexels-photo-6031611.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className="itemImage"
              />
              <div className="details">
                <h1 className="itemTitle">Pedro Lucas</h1>
                <div className="detailsItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">pedrolucas@dash.com</span>
                </div>
                <div className="detailsItem">
                  <span className="itemKey">Telefone:</span>
                  <span className="itemValue">+1 2435 67 89</span>
                </div>
                <div className="detailsItem">
                  <span className="itemKey">Endereço:</span>
                  <span className="itemValue">
                    Elton St. 234 Garden Yd. NewYork
                  </span>
                </div>
                <div className="detailsItem">
                  <span className="itemKey">Cauntry:</span>
                  <span className="itemValue">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart
              aspect={3 / 1}
              title="Despesas do usúario (últimos 6 meses)"
            />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Últimas transações</h1>
          <TableList />
        </div>
      </div>
    </div>
  );
}
