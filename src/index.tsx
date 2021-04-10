import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import UserSearch from "./refs/UserSearch";

const App = () => {
  return (
    <div>
      <UserSearch />
    </div>
  );
};

ReactDOM.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  document.querySelector("#root")
);
