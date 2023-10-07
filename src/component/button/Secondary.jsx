import { Button } from "@mantine/core";
import "./Buttonstyle.css";

const ButtonSecondary = ({ text }) => {
  return (
    <Button className="Secondary" variant="filled" size="md" radius="md">
      {text}
    </Button>
  );
};

export default ButtonSecondary;
