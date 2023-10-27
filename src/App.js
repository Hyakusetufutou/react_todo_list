import "./App.css";

import { ChakraProvider } from "@chakra-ui/react";

import { MainPage } from "./components/pages/MainPage";
import theme from "./theme/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <MainPage />
    </ChakraProvider>
  );
}

export default App;
