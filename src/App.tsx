import { RoutesApp } from "./routes";
import { GlobalStyle } from "./styles/global";

export const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <RoutesApp />
    </div>
  );
};
