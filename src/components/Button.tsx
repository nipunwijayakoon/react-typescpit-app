import React from "react";

interface Props {
  children: string;
  //   color?: string; defauth value set to primary in 10th line. in here, if we set invalid type of color in app it is not a complir error.
  color?: "primary" | "secondary" | "danger"; // now you can set only these 3 value in app, otherwise compile error
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
