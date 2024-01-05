import { RenderData } from "../../../render";
import welcomeContentData from "./modalData.json";

function Welcome({send}) {
  const renderedData = RenderData(welcomeContentData);
  const onClick = () => {
    send({ type: "REGISTER" })
  }
  return <div className="">
    {renderedData.components}
    <button onClick={onClick}>Start Resevation</button>
  </div>;
}
export { Welcome };
