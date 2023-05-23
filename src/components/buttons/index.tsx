// default button styles
const buttonStyles =
  "rounded-md bg-blue-500 px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500";

interface ButtonProps {
  children: JSX.Element;
  width?: string;
  handleClick?: () => void;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  width,
  handleClick,
}): JSX.Element => {
  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${buttonStyles} ${width ? width : "w-full"}`}
    >
      {children}
    </button>
  );
};

export const ButtonLink: React.FC<ButtonProps> = ({
  children,
  href,
  width,
}): JSX.Element => {
  return (
    <a href={href} className={`${buttonStyles} ${width ? width : "w-fit"}`} target="_blank">
      {children}
    </a>
  );
};
