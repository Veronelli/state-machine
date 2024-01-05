import { RenderData } from "../../../render";
import modalContentData from "./modalContentData.json";

function RegisterPatient({send}) {
  const renderedData = RenderData(modalContentData);
  const onClick = () => {
    send({ type: "CONTIUNE" })
  }
  return <div className="">
    {renderedData.components}
    <button onClick={onClick}>Start Resevation</button>
  </div>;
}
export { RegisterPatient };
