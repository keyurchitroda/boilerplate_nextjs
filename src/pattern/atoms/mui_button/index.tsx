import { Button } from "@mui/material";
import React from "react";

export type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  color?: "primary" | "secondary";
  disabled?: boolean;
};

const MuiButton = ({
  onClick,
  children,
  color = "primary",
  disabled,
}: ButtonProps) => {
  return (
    <div>
      <Button
        onClick={onClick}
        color={color}
        disabled={disabled}
        variant="contained"
      >
        {children}
      </Button>
    </div>
  );
};

export default MuiButton;
