function Button({ children, active, setActive }) {
  return (
    <button
      //   className={`bg-gray-800 rounded-full mt-4 px-5 py-2 flex items-center justify-center text-gray-200 text-2xl
      //  hover:bg-emerald-700  transition-all duration-200 shadow-md active:transform active:scale-95 active:bg-emerald-700
      //   focus: outline-none focus:ring-emerald-500 focus:ring-offset-2  ${active ? "ring-offset-2" : ""}`}
      className={` rounded-full mr-1 px-4 py-1.5 flex items-center justify-center text-[var(--asparagus-100)] text-lg 
        hover:bg-[var(--asparagus-700)] transition-all duration-100 shadow-md active:scale-95 active:bg-[var(--asparagus-700)] 
        focus:outline-none focus:ring-[var(--asparagus-500)] focus:ring-offset-2 
        ${active ? "bg-[var(--asparagus-600)]" : "bg-[var(--asparagus-950)]"}`}
      onClick={setActive}
    >
      {children}
    </button>
  );
}

export default Button;
