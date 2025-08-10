"use client";

const Button = ({ children, onClick, className = "", type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-red-500 w-full sm:w-auto hover:bg-red-600 text-white py-2 px-4 rounded-lg transition duration-200 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
