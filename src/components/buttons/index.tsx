export const Button: React.FC<{
  children: JSX.Element;
  width?: string;
  handleClick: () => void;
}> = ({ children, width, handleClick }): JSX.Element => {
  return (
    <button
      type="button"
      onClick={handleClick}
      className={`rounded-md bg-blue-500 px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${
        width ? width : "w-full"
      }`}
    >
      {children}
    </button>
  );
};
