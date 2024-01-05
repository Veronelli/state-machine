function HeaderModal({headerTitle, send}) {
  const onClick = () => {
    send({type: "RESET"})
  }
  return (
    <div className="w-full bg-blue-500 rounded-t-md px-2 flex align-middle justify-between">
      <h2 className="text-white ">{headerTitle}</h2>
      <button className="bg-white m-1 px-2 rounded-md font-semibold text-blue-500" onClick={onClick}>Cancel</button>
    </div>
  );
}

export { HeaderModal };
