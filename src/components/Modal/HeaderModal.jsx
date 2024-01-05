function HeaderModal({headerTitle, send}) {
  const onClick = () => {
    send({type: "RESET"})
  }
  return (
    <div className="w-full bg-blue-500 rounded-t-md px-2">
      <h2 className="text-white ">{headerTitle}</h2>
      <button onClick={onClick}>Cancel</button>
    </div>
  );
}

export { HeaderModal };
