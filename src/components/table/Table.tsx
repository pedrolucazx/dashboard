import { rows } from "./data";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import "./table.scss";

export function TableList() {
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tablaCell">ID de localização</TableCell>
            <TableCell className="tablaCell">Produto</TableCell>
            <TableCell className="tablaCell">Cliente</TableCell>
            <TableCell className="tablaCell">Data</TableCell>
            <TableCell className="tablaCell">Montante</TableCell>
            <TableCell className="tablaCell">Método de pagamento</TableCell>
            <TableCell className="tablaCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell className="tablaCell">{row.id}</TableCell>
              <TableCell className="tablaCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tablaCell">{row.customer}</TableCell>
              <TableCell className="tablaCell">{row.date}</TableCell>
              <TableCell className="tablaCell">{row.amount}</TableCell>
              <TableCell className="tablaCell">{row.method}</TableCell>
              <TableCell className="tablaCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
