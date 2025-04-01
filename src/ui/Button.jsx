function Button({ children, active, setActive }) {
  return (
    <button
      className={`bg-gray-800 rounded-full mt-1 px-4 py-1 flex items-center justify-center text-gray-200 text-xl
     hover:bg-emerald-700  transition-all duration-200 shadow-md active:transform active:scale-95 active:bg-emerald-700
      focus: outline-none focus:ring-emerald-500 focus:ring-offset-2  ${active ? "ring-offset-2" : ""}`}
      onClick={setActive}
    >
      {children}
    </button>
  );
}

export default Button;
