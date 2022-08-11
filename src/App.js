import DataProvider from "./Context/DataProvider";
import { ShoppingCartProvider } from "./Context";

import Router from "./router";

function App() {
  return (
    <DataProvider>
      <ShoppingCartProvider>
        <Router />
      </ShoppingCartProvider>
    </DataProvider>
  );
}

export default App;
