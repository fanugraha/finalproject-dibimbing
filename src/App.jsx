import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import Homepage from "./pages/home/Homepage";

export default function App() {
  return (
    <MantineProvider>
      <Homepage />
    </MantineProvider>
  );
}
