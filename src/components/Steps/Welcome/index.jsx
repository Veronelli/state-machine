import { RenderData } from "../../../render";
import welcomeContentData from "./modalData.json";

function Welcome() {
  const renderedData = RenderData(welcomeContentData);
  return <div className="">
    {renderedData.components}
  </div>;
}
export { Welcome };
