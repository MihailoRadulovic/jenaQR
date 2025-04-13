function Button({ children, active, setActive }) {
  console.log("Button active:", children, active);
  return (
    <button
      //   className={`bg-gray-800 rounded-full mt-4 px-5 py-2 flex items-center justify-center text-gray-200 text-2xl
      //  hover:bg-emerald-700  transition-all duration-200 shadow-md active:transform active:scale-95 active:bg-emerald-700
      //   focus: outline-none focus:ring-emerald-500 focus:ring-offset-2  ${active ? "ring-offset-2" : ""}`}
      className={`bg-gray-800 rounded-full mt-3 mr-1 px-4 py-1 flex items-center justify-center text-gray-200 text-2xl 
        hover:bg-emerald-700 transition-all duration-200 shadow-md active:scale-95 active:bg-emerald-700 
        focus:outline-none focus:ring-emerald-500 focus:ring-offset-2 
        ${active ? "border-4 border-emerald-900 ring-2 ring-offset-2 ring-emerald-700" : "ring-2 ring-transparent ring-offset-2"}`}
      onClick={setActive}
    >
      {children}
    </button>
  );
}

export default Button;
