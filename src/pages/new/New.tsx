import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { Inputs } from "../../formSource";

import { Navbar } from "../../components/navbar/Navbar";
import { Sidebar } from "../../components/sidebar/Sidebar";

import "./new.scss";
import { useState } from "react";

interface IProps {
  inputs: Inputs[];
  title: string;
}

export function New({ inputs, title }: IProps) {
  const [file, setFile] = useState<any | null>(null);

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Imagem: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files![0])}
                  style={{ display: "none" }}
                />
              </div>
              {inputs.map((input) => {
                return (
                  <div className="formInput" key={input.id}>
                    <label>{input.label}</label>
                    <input type={input.type} placeholder={input.placeholder} />
                  </div>
                );
              })}
              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
