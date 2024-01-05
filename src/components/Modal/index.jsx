import { HeaderModal } from "./HeaderModal";

function Modal(props) {
  return (
    <div
      className="absolute top-0 left-0 w-full h-full bg-black/50 z-10 flex justify-center items-center"
      style={props.style}
    >
      <div className="bg-white w-1/2 h-1/2 rounded-lg shadow-[inset_-3px_-3px_20px_rgba(0,0,0,0.6)]">
        <HeaderModal send={props.send} headerTitle={props.headerTitle}/>
        <div className="px-4">
        {props.children}
        </div>
      </div>
    </div>
  );
}

export { Modal };
