import { renderData } from "../../../render";
import welcomeContentData from "./modalData.json";

function Welcome() {
  const renderedData = renderData(welcomeContentData);
  return <div className="">
    {renderedData}
  </div>;
}
export { Welcome };
