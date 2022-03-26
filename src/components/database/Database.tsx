import { userColumns, userRows } from "../../datatablesource";
import { DataGrid } from "@mui/x-data-grid";
import "./database.scss";

export function Database() {
  return (
    <div className="database">
      <DataGrid
        rows={userRows}
        columns={userColumns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
}
