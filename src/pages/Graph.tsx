import React, { RefObject } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  ChartData,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { PDFExport } from "@progress/kendo-react-pdf";
import Template from "./Template";
import Card from "./Card";
import { GraphAction } from "../store/actions";
import { RootState } from "../utils/typeHelper";
import LocationIcon from "../assets/location.png";
import PrinterIcon from "../assets/printer.png";
import "./Graph.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
};

export default function Graph() {
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(true);
  const [label, setLabel] = React.useState("");
  const [data, setData] = React.useState<ChartData<"line", number[], string>>();
  const pdfExportComponent: RefObject<any> = React.useRef(null);

  const { graphData, status } = useSelector(
    (state: RootState) => ({
      graphData: state.Graph.data,
      status: state.Graph.status,
    }),
    (prevData, newData) => prevData.graphData === newData.graphData
  );

  const handlePrint = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };

  React.useEffect(() => {
    setLoading(status);

    if (graphData) {
      const label = graphData.keys[3];
      const labels = graphData.data.map((item: any) => item.data_year);
      const dataSet = graphData.data.map((item: any) => item[label]);

      setLabel(label);
      setData({
        labels,
        datasets: [
          {
            label,
            data: dataSet,
            borderColor: "rgb(0, 0, 255)",
            backgroundColor: "rgba(0, 0, 255, 0.5)",
          },
        ],
      });
    }
  }, [status, graphData]);

  React.useEffect(() => {
    dispatch(GraphAction.graphRequest());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : data ? (
        <>
          <button
            className="d-flex a-center j-between btn-print"
            onClick={handlePrint}
          >
            <img alt="printer" src={PrinterIcon} />
            Print
          </button>
          <div>
            <PDFExport
              pageTemplate={(props: any) => <Template {...props} num={1} />}
              fileName={`graph.pdf`}
              ref={pdfExportComponent}
              paperSize={"A4"}
              margin={{
                top: "15mm",
                left: "30px",
                right: "30px",
                bottom: "50px",
              }}
              scale={0.6}
            >
              <Card />
              <Card />
              <Card />
              <div className="d-flex a-center mx-3">
                <img alt="icon" src={LocationIcon} />
                <p className="title">Crime</p>
                <hr className="title-bar"></hr>
              </div>
              <div className="card-graph">
                <div className="d-flex a-center card-bar-graph">
                  <p className="graph-title">{label}</p>
                </div>
                <div className="d-flex a-center j-center graph-wrapper">
                  <p className="vertical-letter">Arrests</p>
                  <Line
                    style={{ padding: "10px" }}
                    options={options}
                    data={data}
                  />
                </div>
              </div>
            </PDFExport>
          </div>
        </>
      ) : (
        <p>No Data</p>
      )}
    </>
  );
}
