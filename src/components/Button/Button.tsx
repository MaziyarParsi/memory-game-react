import { FC } from "react";

type TProps = {
  children: string;
  onClick: () => void;
};

const Button: FC<TProps> = ({ children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="hover:bg-btnHover w-52 bg-blue-500 border border-solid  border-white py-2 px-3 rounded-md text-white cursor-pointer text-center"
    >
      {children}
    </div>
  );
};

export default Button;
