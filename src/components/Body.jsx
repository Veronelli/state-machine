import { Fragment } from "react";

const defaultStyles = {
  background: "black",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
};

function Body(props) {
  return (
    <div style={{ ...defaultStyles, ...props.style }} className="w-full h-full">
      {props.children}
    </div>
  );
}
export { Body };
