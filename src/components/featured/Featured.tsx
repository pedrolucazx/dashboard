import { CircularProgressbar } from "react-circular-progressbar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

import "react-circular-progressbar/dist/styles.css";
import "./featured.scss";

export function Featured() {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Receita Total</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Vendas totais realizadas hoje</p>
        <p className="amount">R$450</p>
        <p className="desc">
          Processamento de transações anteriores. Os últimos pagamentos não
          podem ser incluídos.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Meta</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="resultAmount">R$12,4K</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Semana passada</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">R$12,4K</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Mês passado</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">R$12,4K</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
