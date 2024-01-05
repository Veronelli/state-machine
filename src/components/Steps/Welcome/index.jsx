import { RenderData } from "../../../render";
import modalContentData from "./modalContentData.json";

function Welcome({send}) {
  const renderedData = RenderData(modalContentData);
  const onClick = () => {
    send({ type: "REGISTER" })
  }
  return <div className="">
    {renderedData.components}
    <button onClick={onClick}>Start Resevation</button>
  </div>;
}
export { Welcome };
