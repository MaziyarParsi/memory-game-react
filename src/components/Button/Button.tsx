import { FC } from "react";

type TProps = {
  children: string;
};

const Button: FC<TProps> = ({ children }) => {
  return (
    <div className="hover:bg-btnHover w-52 bg-blue-500 border border-solid  border-white py-2 px-3 rounded-md text-white cursor-pointer text-center">
      {children}
    </div>
  );
};

export default Button;
