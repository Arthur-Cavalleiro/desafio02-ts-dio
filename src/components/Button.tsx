import { Button } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
}

export const ButtonComp = ({ onClick, children }: ButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Button
      onClick={handleClick}
      colorScheme="teal"
      size="sm"
      width="100%"
      marginTop="5px"
      type="submit"
    >
      {children}
    </Button>
  );
};
