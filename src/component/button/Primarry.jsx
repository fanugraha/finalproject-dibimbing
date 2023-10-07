import { Button } from "@mantine/core";
import "./Buttonstyle.css";

const ButtonPrimarry = ({ text }) => {
  return (
    <Button className="Primarry" variant="filled" size="md" radius="md">
      {text}
    </Button>
  );
};

export default ButtonPrimarry;
