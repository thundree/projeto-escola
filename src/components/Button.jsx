export default function Button({ children, variant, ...props }) {
  const buttonClasses = {
    primary: "bg-blue-400 text-white",
    secondary: "bg-gray-300 text-gray-800",
  };

  return (
    <button
      {...props}
      className={`py-1 px-2 flex flex-row gap-2 items-center ml-auto rounded-md cursor-pointer hover:opacity-80 ${
        buttonClasses[variant] || buttonClasses.primary
      } ${props.className || ""}`}
    >
      {children}
    </button>
  );
}
